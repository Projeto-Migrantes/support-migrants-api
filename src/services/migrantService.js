import Address from '../models/Address.js';
import Migrant from '../models/Migrant.js';
import MigrantDocument from '../models/MigrantDocument.js';
import { Sequelize } from 'sequelize';

/*
* Function that fetches all migrants from the database
*/
const findAllMigrants = async () => {
    return await Migrant.findAll({ 
        order:[['id', 'DESC']],
        include: [ {model: MigrantDocument}, {model: Address}], });
};

/*
* Function that fetches a migrant by id
*/
const findMigrantById = async (id) => {
    return await Migrant.findByPk(id, {
        include: [ {model: MigrantDocument}, {model: Address}]
    });
}; 

/*
* Function that creates a new migrant using the provided data
*/
const createMigrant = async (migrant, addresId) => {
    return await Migrant.create({
        ...migrant,
        address_id: addresId
    });
};

/*
* Function that fetches a migrant by email
*/
const findOneMigrantByEmail = async (email) => {
    return await Migrant.scope('withPassword').findOne({
        raw: true, where: { email }
    });
};

/*
* Function that updates a migrant
*/
const updateMigrant = async (newData, migrantId, newAddressId) => {
    return await Migrant.update(
       { ...newData, 
        address_id: newAddressId},
        { where: { id: migrantId } });
};

/*
* Function that deletes a migrant
*/
const deleteMigrant = async (migrantId) => {
    return await Migrant.destroy({ where: { id: migrantId } });
};

/*
* Function that updates a migrant password
*/
const updatePasswordMigrant = async (newPassowrd, migrantId) => {
    return await Migrant.update({
        password: newPassowrd, 
    },{
        where: {id: migrantId}
    });
};

/*
* Function that counts all migrants
*/
const countMigrants = async () => {
    return await Migrant.count();
};

/*
* Function that searches migrants by query
*/
const searchMigrants = async (query) => {
    try {
        if (!validateQuery(query)) {
            throw new Error('Query inválida');
        }
        const migrants = await Migrant.findAll({
            where: {
                [Sequelize.Op.or]: [
                    { email: { [Sequelize.Op.iLike]: `%${query}%` } },
                    { phone: { [Sequelize.Op.iLike]: `%${query}%` } }, 
                    { '$MigrantDocument.document_identification$': { [Sequelize.Op.iLike]: `%${query}%` } } 
                ]
            },
            include: [
                {
                    model: MigrantDocument,
                    required: false 
                }
            ]
        });

        return migrants;
    } catch (error) {
        throw new Error('Erro ao buscar migrantes: ' + error.message);
    }
};

/*
* Function that validates a query
*/
const validateQuery = (query) => {
    return typeof query === 'string' && query.trim().length > 0;
};

export default {
    findAllMigrants, findMigrantById, findOneMigrantByEmail,
    createMigrant, updateMigrant, deleteMigrant,
    updatePasswordMigrant, searchMigrants, countMigrants,
};