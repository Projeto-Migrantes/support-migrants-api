import RequirementRestriction from "../models/RequirementRestriction.js";

const findAllRequirementRestriction = async () => {
    return await RequirementRestriction.findAll();
};

const createRequirementRestriction = async (requirementRestriction, institutionId) => {
    return await RequirementRestriction.create({
        ...requirementRestriction,
        institution_id: institutionId
    });
};

const updateRequirementRestriction = async (newData, institutionId) => {
    return await RequirementRestriction.update(
        newData, 
        { where: { id: institutionId } });
};

export default {
    findAllRequirementRestriction,
    createRequirementRestriction,
    updateRequirementRestriction
};