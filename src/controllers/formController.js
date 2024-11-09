import formService from "../services/formService.js";

const findAll = async (req, res) => {
    try {
        const forms = await formService.findAllForms();
        if(!forms || forms.length === 0){
            return res.status(200).json({message: 'Nenhum formulário encontrado'});
        }
        return res.status(200).json({ forms });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

const findById = async (req, res) => {
    try {
      const form = await formService.findFormById(req.params.id);
      if(!form){
        return res.status(200).json({message: 'Nenhum formulário encontrado'})
    }  
    return res.status(200).json({ form });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' })        
    }
};

const findyByStatus = async (req, res) => {
    try {
        let forms;
        const status = req.params.status;

        if(status === 'todos'){
            forms = await formService.findAllForms();
        } else {
            forms = await formService.findFormsByStatus(status);
        }

        if(!forms || forms.length === 0){
            return res.status(200).json({ message: 'Nenhum formulário foi encontrado com esse status' });
        }
        return res.status(200).json({ forms });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor' });
    }
};

const update = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        
        const [updatedLines] = await formService.updateForms(id, data)
        if (updatedLines === 0) {
            return res.status(404).json({ message: 'Forms não encontrado' });
        }
        return res.status(200).json({ message: 'Forms atualizado com sucesso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

const create = async (req, res) => {
    try {
        const form = req.body;

        const createdForm = await formService.createForm(form);
       
        return res.status(201).json({
             message: 'Formulário enviado com sucesso', 
             createdForm
            });

    } catch (error) {
        console.error(error);
        return res.status(500).json( {error: 'Erro interno do servidor '} );
    };
};

const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedForm = await formService.deleteForm(id);

        if(deletedForm === 0){
            return res.status(404).json({ message: 'Formulário não encontrada' });
        };

        return res.status(204).send();

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

export default { 
    findAll,
    findById,
    create,
    destroy,
    findyByStatus,
    update
};