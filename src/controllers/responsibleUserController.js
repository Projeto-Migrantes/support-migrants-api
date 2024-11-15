import responsibleUserService from "../services/responsibleUserService.js";

/*
* Function that fetches all responsible users from the database
*/
const findAll = async (req, res) => {
    try {
        const responsibleUser = await responsibleUserService.findAllResponsibleUser();

        if (!responsibleUser  || responsibleUser.length === 0) {
            return res.status(200).json({ message: "Nenhum Usuário Responsável foi encontrado" });
        };
        
        return res.status(200).json({ responsibleUser });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

/*
* Function that creates a new responsible user using the provided data
*/
const create = async (req, res) => {
    try {
        const createdResponsibleUser= await responsibleUserService.createResponsibleUser(req.body);

        return res.status(201).json({ message: "Usuário Responsável criado", createdResponsibleUser });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

export default {
    findAll,  create,
};
