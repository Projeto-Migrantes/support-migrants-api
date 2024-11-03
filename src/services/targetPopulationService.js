import TargetPopulation from "../models/TargetPopulation.js";

const findAllTargetPopulation = async () => {
    return await TargetPopulation.findAll();
};

const createTargetPopulation = async (targetPopulation, institutionId) => {
    return await TargetPopulation.create({
        ...targetPopulation,
        institution_id: institutionId
    });
};

const updateTargetPopulation = async (newData, institutionId) => {
    return await TargetPopulation.update(
        newData, 
        { where: { id: institutionId } });
};

export default {
    findAllTargetPopulation,
    createTargetPopulation,
    updateTargetPopulation,
};