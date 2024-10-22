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

export default {
    findAllServicesOffered,
    createServicesOffered,
};