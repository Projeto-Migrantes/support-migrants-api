import Migrant from '../models/Migrant.js';

const findAllMigrants = async () => {
    return await Migrant.findAll();
};

const findMigrantById = async (id) => {
    return await Migrant.findByPk(id);
}; 

const createMigrant = async (migrant, addresId) => {
    return await Migrant.create({
        ...migrant,
        address_id: addresId
    });
}

const findOneMigrantByEmail = async (email) => {
    return await Migrant.scope('withPassword').findOne({
        raw: true, where: { email }
    });
}

export default {
    findAllMigrants,
    findMigrantById,
    findOneMigrantByEmail,
    createMigrant,
};