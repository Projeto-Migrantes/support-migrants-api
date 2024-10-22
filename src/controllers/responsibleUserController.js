import responsibleUserService from "../services/responsibleUserService.js";

const findAll = async (req, res) => {
    try {
        const responsibleUser = await responsibleUserService.findAllResponsibleUser();
        if (!responsibleUser  || responsibleUser.length === 0) {
            return res.status(404).json({ message: "Nenhum Usuário Responsável foi encontrado" });
        }
        return res.status(200).json({ responsibleUser });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

const create = async (req, res) => {
    try {
        const createdResponsibleUser= await responsibleUserService.createResponsibleUser(req.body);

        return res.status(201).json({ message: "Usuário Responsável criado", createdResponsibleUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

export default {
    findAll,
    create,
};
