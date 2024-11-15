import ResponsibleUser from "../models/ResponsibleUser.js";

/*
* Function that fetches all responsible users from the database
*/
const findAllResponsibleUser = async () => {
    return await ResponsibleUser.findAll();
};

/*
* Function that creates a new responsible user using the provided data
*/
const createResponsibleUser = async (responsibleUser) => {
    return await ResponsibleUser.create({
        ...responsibleUser,
    });
};

export default {
    findAllResponsibleUser,
    createResponsibleUser,
};