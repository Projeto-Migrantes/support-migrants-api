import ResponsibleUser from "../models/ResponsibleUser.js";

const findAllResponsibleUser = async () => {
    return await ResponsibleUser.findAll();
};

const createResponsibleUser = async (responsibleUser, institutionId) => {
    return await ResponsibleUser.create({
        ...responsibleUser,
        institution_id: institutionId
    });
};

export default {
    findAllResponsibleUser,
    createResponsibleUser,
};