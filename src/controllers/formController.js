import formService from "../services/formService.js";

/* 
* Function that fetches all forms from the database
*/
const findAll = async (req, res) => {
    try {
        const forms = await formService.findAllForms();
        
        if(!forms || forms.length === 0){
            return res.status(200).json({ message: "Nenhum formulário encontrado" });
        };

        return res.status(200).json({ 
            message: "Formulários encontrados com sucesso",
            data: { forms } 
        });
    } catch (error) {
        return res.status(500).json({ error: "Erro no servidor." });        
    };
};

/*
* Function that fetches a form by its ID
*/
const findById = async (req, res) => {
    try {
      const form = await formService.findFormById(req.params.id);

        if(!form){
            return res.status(200).json({ message: "Nenhum formulário encontrado" });
        };
    
        return res.status(200).json({ 
            message: "Formulário encontrado com sucesso",
            data: { form } 
        });
    } catch (error) {
        return res.status(500).json({ error: "Erro no servidor." });     
    };
};

/*
* Function that fetches all forms by status
*/
const findyByStatus = async (req, res) => {
    try {
        let forms;
        const status = req.params.status;

        if(status === "todos"){
            forms = await formService.findAllForms();
        } else {
            forms = await formService.findFormsByStatus(status);
        };

        if(!forms || forms.length === 0){
            return res.status(200).json({ message: "Nenhum formulário foi encontrado com esse status" });
        };

        return res.status(200).json({ 
            message: "Formulários encontrados com sucesso",
            data: { forms } 
        });
    } catch (error) {
        return res.status(500).json({ error: "Erro no servidor" });
    };
};

/*
* Function that updates a form by its ID
*/
const update = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        
        const [updatedLines] = await formService.updateForms(id, data);

        if (updatedLines === 0) {
            return res.status(404).json({ message: "Forms não encontrado" });
        }
        return res.status(200).json({ message: "Forms atualizado com sucesso" });
    } catch (error) {
        return res.status(500).json({ message: "Erro no servidor" });
    };
};

/*
* Function that creates a new form using the provided data
*/
const create = async (req, res) => {
    try {
        const form = req.body;
        const createdForm = await formService.createForm(form);
       
        return res.status(201).json({ 
            message: "Formulário enviado com sucesso", 
            data: { createdForm } 
        });

    } catch (error) {
        return res.status(500).json({ error: "Erro interno do servidor " });
    };
};

/*
* Function that deletes a form by its ID
*/
const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedForm = await formService.deleteForm(id);

        if(deletedForm === 0){
            return res.status(404).json({ message: "Formulário não encontrado" });
        };

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ message: "Erro no servidor" });
    };
};

/*
* Function that counts the number of unread forms
*/
const countUnread = async (req, res) => {
    try {
        const count = await formService.countFormsPedding();

        return res.status(200).json({ 
            data: { count } 
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro no servidor" });
    };
};

export default { 
    findAll, findById, create,
    destroy, findyByStatus,
    update, countUnread,
};