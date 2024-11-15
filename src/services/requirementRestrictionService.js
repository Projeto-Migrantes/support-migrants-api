import RequirementRestriction from "../models/RequirementRestriction.js";

/*
* Function that fetches all requirement restrictions from the database
*/
const findAllRequirementRestriction = async () => {
    return await RequirementRestriction.findAll();
};

/*
* Function that creates a new requirement restriction using the provided data
*/
const createRequirementRestriction = async (requirementRestriction, institutionId) => {
    return await RequirementRestriction.create({
        ...requirementRestriction,
        institution_id: institutionId
    });
};

/*
* Function that updates a requirement restriction
*/
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