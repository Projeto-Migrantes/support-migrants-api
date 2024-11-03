import InstitutionDescriptions from "../models/InstitutionDescriptions.js";

const findAllInstitutionDescriptions = async () => {
    return await InstitutionDescriptions.findAll();
};

const createInstitutionDescriptions = async (institutionDescriptions, institutionId) => {
    return await InstitutionDescriptions.create({
        ...institutionDescriptions,
        institution_id: institutionId
    });
};

const updateInstitutionDescriptions = async (newData, institutionId) => {
    return await InstitutionDescriptions.update(
        newData, 
        { where: { id: institutionId } });
};

export default {
    findAllInstitutionDescriptions,
    createInstitutionDescriptions,
    updateInstitutionDescriptions
};