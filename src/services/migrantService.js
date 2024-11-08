import Address from '../models/Address.js';
import Migrant from '../models/Migrant.js';
import MigrantDocument from '../models/MigrantDocument.js';
import { Sequelize } from 'sequelize';

// Find All Migrants
const findAllMigrants = async () => {
    return await Migrant.findAll({ 
        order:[['id', 'DESC']],
        include: [ {model: MigrantDocument}, {model: Address}], });
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
const updateMigrant = async (newData, migrantId, newAddressId) => {
    return await Migrant.update(
       { ...newData, 
        address_id: newAddressId},
        { where: { id: migrantId } });
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


const validateQuery = (query) => {
    return typeof query === 'string' && query.trim().length > 0;
};

export default {
    findAllMigrants,
    findMigrantById,
    findOneMigrantByEmail,
    createMigrant,
    updateMigrant,
    deleteMigrant,
    updatePasswordMigrant,
    searchMigrants,
};