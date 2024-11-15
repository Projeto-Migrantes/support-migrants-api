import requirementRestrictionService from "../services/requirementRestrictionService.js";

/*
* Function that fetches all requirement restrictions from the database
*/
const findAll = async (req, res) => {
    try {
        const requirementRestriction = await requirementRestrictionService.findAllRequirementRestriction();

        if (!requirementRestriction  || requirementRestriction.length === 0) {
            return res.status(200).json({ message: "Nenhum Requerimento/Restrição foi encontrado" });
        };

        return res.status(200).json({ requirementRestriction });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

/*
* Function that creates a new requirement restriction using the provided data
*/
const create = async (req, res) => {
    try {
        const createdRequirementRestriction = await requirementRestrictionService.createRequirementRestriction(req.body);

        return res.status(201).json({ message: "Requerimento/Restrição criado", createdRequirementRestriction });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

export default {
    findAll, create,
};
