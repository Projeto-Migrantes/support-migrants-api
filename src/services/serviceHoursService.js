import ServiceHours from "../models/ServiceHours.js";

const findAllServiceHours = async () => {
    return await ServiceHours.findAll();
};

const createServiceHours = async (serviceHours, institutionId) => {
    return await ServiceHours.create({
        ...serviceHours,
        institution_id: institutionId
    });
};

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