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

export default {
    findAllTargetPopulation,
    createTargetPopulation,
};