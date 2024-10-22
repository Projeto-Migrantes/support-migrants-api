import ServiceCost from "../models/ServiceCost.js";

const findAllServiceCost = async () => {
    return await ServiceCost.findAll();
};

const createServiceCost = async (serviceCost, institutionId) => {
    return await ServiceCost.create({
        ...serviceCost,
        institution_id: institutionId
    });
};

export default {
    findAllServiceCost,
    createServiceCost,
};