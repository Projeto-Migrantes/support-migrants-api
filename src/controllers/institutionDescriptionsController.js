import institutionDescriptionsService from "../services/institutionDescriptionsService.js";

const findAll = async (req, res) => {
    try {
        const institutionDescriptions = await institutionDescriptionsService.findAllInstitutionDescriptions();
        if (!institutionDescriptions  || institutionDescriptions.length === 0) {
            return res.status(404).json({ message: "Nenhuma Descrição da instituição foi encontrada" });
        }
        return res.status(200).json({ institutionDescriptions });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

const create = async (req, res) => {
    try {
        const createdInstitutionDescriptions = await institutionDescriptionsService.createInstitutionDescriptions(req.body);

        return res.status(201).json({ message: "Descrição criada", createdInstitutionDescriptions });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

export default {
    findAll,
    create,
};
