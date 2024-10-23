import requirementRestrictionService from "../services/requirementRestrictionService.js";

const findAll = async (req, res) => {
    try {
        const requirementRestriction = await requirementRestrictionService.findAllRequirementRestriction();
        if (!requirementRestriction  || requirementRestriction.length === 0) {
            return res.status(404).json({ message: "Nenhum Requerimento/Restrição foi encontrado" });
        }
        return res.status(200).json({ requirementRestriction });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

const create = async (req, res) => {
    try {
        const createdRequirementRestriction = await requirementRestrictionService.createRequirementRestriction(req.body);

        return res.status(201).json({ message: "Requerimento/Restrição criado", createdRequirementRestriction });
    } catch (error) {
        console.log(error);
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

export default {
    findAll,
    create,
};
