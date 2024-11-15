import Institution from "../models/Institution.js";
import Address from '../models/Address.js';
import Category from '../models/Category.js';
import ResponsibleUser from '../models/ResponsibleUser.js';
import InstitutionDescriptions from '../models/InstitutionDescriptions.js';
import ServiceHours from '../models/ServiceHours.js';
import TargetPopulation from '../models/TargetPopulation.js';
import RequirementRestriction from '../models/RequirementRestriction.js';
import ServicesOfferred from '../models/ServicesOffered.js';
import ServiceCosts from '../models/ServiceCost.js';
import { Sequelize } from "sequelize";

/*
* Function that fetches all institutions from the database
*/
const findAllInstitutions = async () => {
    return await Institution.findAll({
        order:[ 
            ['id', 'DESC']
        ],
        include: models.all,
    });
};

/*
* Function that fetches the number of institutions from the database
*/
const countInstitutions = async () => {
    return await Institution.count();
};

/*
* Function that fetches an institution by id
*/
const findInstitutionById = async (id) => {
    return await Institution.findByPk(id, {
        include: models.all,
    });
};

/*
* Function that creates a new institution using the provided data
*/
const createInstitution = async (institution, addressId, responsible_user_id) => {
    return await Institution.create({
        ...institution,
        address_id: addressId,
        responsible_user_id: responsible_user_id
    });
};

/*
* Function that fetches all institutions by category
*/
const findAllInstitutionsByCategory = async (categoryId) => {
    return await Institution.findAll({ where: {category_id: categoryId}, include: models.all});
};

/*
* Function that deletes an institution
*/
const deleteInstitution = async (institutionId) => {
    return await Institution.destroy({ where: { id: institutionId } });
};

/*
* Function that updates an institution
*/
const updateInstitution = async (newData, institutionId, newAddressId, responsible_user_id) => {
    return await Institution.update(
       { ...newData, 
        address_id: newAddressId,
        responsible_user_id: responsible_user_id
    },
        { where: { id: institutionId } });
};

/*
* Function that searches institutions by query
*/
const searchInstitutions = async (query) => {
    try {
        const institutions = await Institution.findAll({
            where: {
                [Sequelize.Op.or]: [
                    { email: { [Sequelize.Op.iLike]: `%${query}%` } },
                    { main_phone: { [Sequelize.Op.iLike]: `%${query}%` } }, 
                    { cnpj: { [Sequelize.Op.iLike]: `%${query}%` } } 
                ]
            },
        });

        return institutions;
    } catch (error) {
        throw new Error('Erro ao buscar instituições: ' + error.message);
    }
};

/*
* Function that fetches an institution by email
*/
const findInstitutionByEmail = async (email) => {
    return await Institution.findOne({ where: { email } });
};

/*
* Object that contains all models to be included in the institution model
*/
const models = {
    all: [
        { model: Category }, 
        { model: Address }, 
        { model: ResponsibleUser }, 
        { model: InstitutionDescriptions },
        { model: ServiceHours }, 
        { model: TargetPopulation }, 
        { model: RequirementRestriction }, 
        { model: ServicesOfferred }, 
        { model: ServiceCosts }]
};

export default {
    findAllInstitutions,  findInstitutionById,  createInstitution,
    findAllInstitutionsByCategory, deleteInstitution,
    searchInstitutions, updateInstitution, countInstitutions,
    findInstitutionByEmail,
};