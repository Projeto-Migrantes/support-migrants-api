import MigrantDocument from '../models/MigrantDocument.js';

/*
* Function that fetches all migrants documents from the database
*/
const findAllMigrantsDocuments = async () => {
    return await MigrantDocument.findAll();
};

/*
* Function that fetches a migrant document by ID from the database
*/
const findMigrantsDocuments = async (id) => {
    return await MigrantDocument.findByPk(id);
}; 

/*
* Function that deletes a migrant document
*/
const deleteMigrantDocument = async (migrantId) => {
    return await MigrantDocument.destroy({ where: { migrant_id: migrantId } });
};

/*
* Function that updates a migrant document
*/
const updateMigrantDocument= async (newData, migrantId) => {
    return await MigrantDocument.update(
        newData, 
        { where: { id: migrantId } });
};

/*
* Function that creates a new migrant document using the provided data
*/
const createMigrantsDocuments = async (migrantDocumet, migrantId) => {
    return await MigrantDocument.create({
        ...migrantDocumet,
        migrant_id: migrantId
    });
};

export default {
    findAllMigrantsDocuments, findMigrantsDocuments,
    createMigrantsDocuments, deleteMigrantDocument,
    updateMigrantDocument,
};