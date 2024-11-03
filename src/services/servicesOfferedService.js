import ServicesOffered from "../models/ServicesOffered.js";

const findAllServicesOffered = async () => {
    return await ServicesOffered.findAll();
};

const createServicesOffered= async (servicesOffered, institutionId) => {
    return await ServicesOffered.create({
        ...servicesOffered,
        institution_id: institutionId
    });
};

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