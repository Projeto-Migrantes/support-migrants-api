import Address from '../models/Address.js';
import Migrant from '../models/Migrant.js';
import MigrantDocument from '../models/MigrantDocument.js';

// Find All Migrants
const findAllMigrants = async () => {
    return await Migrant.findAll({
        include: [ {model: MigrantDocument}, {model: Address}]});
};

// Find All Migrant by ID
const findMigrantById = async (id) => {
    return await Migrant.findByPk(id, {
        include: [ {model: MigrantDocument}, {model: Address}]
    });
}; 

// Create one Migrant
const createMigrant = async (migrant, addresId) => {
    return await Migrant.create({
        ...migrant,
        address_id: addresId
    });
}

// Find One Migrant By Email
const findOneMigrantByEmail = async (email) => {
    return await Migrant.scope('withPassword').findOne({
        raw: true, where: { email }
    });
}

// Update one Migrant by ID
const updateMigrant = async (newData, migrantId) => {
    return await Migrant.update(newData, { where: { id: migrantId } });
};

// Delete Migrant By ID
const deleteMigrant = async (migrantId) => {
    return await Migrant.destroy({ where: { id: migrantId } });
};

const updatePasswordMigrant = async (newPassowrd, migrantId) => {
    return await Migrant.update({
        password: newPassowrd, 
    },{
        where: {id: migrantId}
    });
}

export default {
    findAllMigrants,
    findMigrantById,
    findOneMigrantByEmail,
    createMigrant,
    updateMigrant,
    deleteMigrant,
    updatePasswordMigrant,
};