import ResponsibleUser from "../models/ResponsibleUser.js";

const findAllResponsibleUser = async () => {
    return await ResponsibleUser.findAll();
};

const createResponsibleUser = async (responsibleUser) => {
    return await ResponsibleUser.create({
        ...responsibleUser,
    });
};

export default {
    findAllResponsibleUser,
    createResponsibleUser,
};