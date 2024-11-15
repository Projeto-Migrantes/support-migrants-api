import TargetPopulation from "../models/TargetPopulation.js";

/*
* Function that fetches all target populations from the database
*/
const findAllTargetPopulation = async () => {
    return await TargetPopulation.findAll();
};

/*
* Function that creates a new target population using the provided data
*/
const createTargetPopulation = async (targetPopulation, institutionId) => {
    return await TargetPopulation.create({
        ...targetPopulation,
        institution_id: institutionId
    });
};

/*
* Function that updates a target population
*/
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