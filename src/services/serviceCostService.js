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

const updateServiceCost = async (newData, institutionId) => {
    return await ServiceCost.update(
        newData, 
        { where: { id: institutionId } });
};


export default {
    findAllServiceCost,
    createServiceCost,
    updateServiceCost
};