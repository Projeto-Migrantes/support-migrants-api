import ServicesOffered from "../models/ServicesOffered.js";

/*
* Function that fetches all services offered from the database
*/
const findAllServicesOffered = async () => {
    return await ServicesOffered.findAll();
};

/*
* Function that creates a new services offered using the provided data
*/
const createServicesOffered= async (servicesOffered, institutionId) => {
    return await ServicesOffered.create({
        ...servicesOffered,
        institution_id: institutionId
    });
};

/*
* Function that updates a services offered
*/
const updateServicesOffered = async (newData, institutionId) => {
    return await ServicesOffered.update(
        newData, 
        { where: { id: institutionId } });
};

export default {
    findAllServicesOffered,
    createServicesOffered,
    updateServicesOffered
};