import ServiceCost from "../models/ServiceCost.js";

/*
* Function that fetches all service costs from the database
*/
const findAllServiceCost = async () => {
    return await ServiceCost.findAll();
};

/*
* Function that creates a new service cost using the provided data
*/
const createServiceCost = async (serviceCost, institutionId) => {
    return await ServiceCost.create({
        ...serviceCost,
        institution_id: institutionId
    });
};

/*
* Function that updates a service cost
*/
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