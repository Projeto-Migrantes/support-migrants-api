import InstitutionDescriptions from "../models/InstitutionDescriptions.js";

/*
* Function that fetches all institution descriptions from the database
*/
const findAllInstitutionDescriptions = async () => {
    return await InstitutionDescriptions.findAll();
};

/*
* Function that creates a new institution description using the provided data
*/
const createInstitutionDescriptions = async (institutionDescriptions, institutionId) => {
    return await InstitutionDescriptions.create({
        ...institutionDescriptions,
        institution_id: institutionId
    });
};

/*
* Function that updates a institution description
*/
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