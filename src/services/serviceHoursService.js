import ServiceHours from "../models/ServiceHours.js";

/*
* Function that fetches all service hours from the database
*/
const findAllServiceHours = async () => {
    return await ServiceHours.findAll();
};

/*
* Function that creates a new service hours using the provided data
*/
const createServiceHours = async (serviceHours, institutionId) => {
    return await ServiceHours.create({
        ...serviceHours,
        institution_id: institutionId
    });
};

/*
* Function that updates a service hours
*/
const updateServiceHours= async (newData, institutionId) => {
    return await ServiceHours.update(
        newData, 
        { where: { id: institutionId } });
};

export default {
    findAllServiceHours,
    createServiceHours,
    updateServiceHours,
};