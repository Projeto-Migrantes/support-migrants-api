import institutionDescriptionsService from "../services/institutionDescriptionsService.js";

/*
* Function that fetches all institution descriptions from the database
*/
const findAll = async (req, res) => {
    try {
        const institutionDescriptions = await institutionDescriptionsService.findAllInstitutionDescriptions();
        
        if (!institutionDescriptions  || institutionDescriptions.length === 0) {
            return res.status(200).json({ message: "Nenhuma Descrição da instituição foi encontrada" });
        };

        return res.status(200).json({ institutionDescriptions });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

/*
* Function that creates a new institution description using the provided data
*/
const create = async (req, res) => {
    try {
        const createdInstitutionDescriptions = await institutionDescriptionsService.createInstitutionDescriptions(req.body);

        return res.status(201).json({ message: "Descrição criada", createdInstitutionDescriptions });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

export default {
    findAll, create,
};
