import MigrantDocument from '../models/MigrantDocument.js';

const findAllMigrantsDocuments = async () => {
    return await MigrantDocument.findAll();
};

const findMigrantsDocuments = async (id) => {
    return await MigrantDocument.findByPk(id);
}; 

const createMigrantsDocuments = async (migrantDocumet, migrantId) => {
    return await MigrantDocument.create({
        ...migrantDocumet,
        migrant_id: migrantId
    });
}

export default {
    findAllMigrantsDocuments,
    findMigrantsDocuments,
    createMigrantsDocuments,
};