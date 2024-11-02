import MigrantDocument from '../models/MigrantDocument.js';

const findAllMigrantsDocuments = async () => {
    return await MigrantDocument.findAll();
};

const findMigrantsDocuments = async (id) => {
    return await MigrantDocument.findByPk(id);
}; 

// Delete Document Migrant By ID
const deleteMigrantDocument = async (migrantId) => {
    return await MigrantDocument.destroy({ where: { migrant_id: migrantId } });
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
    deleteMigrantDocument,
};