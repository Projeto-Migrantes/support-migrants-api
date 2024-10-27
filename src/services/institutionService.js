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

const findAllInstitutions = async () => {
    return await Institution.findAll({
        order:[ 
            ['id', 'DESC']
        ],
        include: models.all,
    });
};

const findInstitutionById = async (id) => {
    return await Institution.findByPk(id, {
      include: [{model: Category}, {model: Address}]
    });
};

const createInstitution = async (institution, addressId, responsibleUserId) => {
    return await Institution.create({
        ...institution,
        address_id: addressId,
        responsible_user_id: responsibleUserId
    });
};

const findAllInstitutionsByCategory = async (categoryId) => {
    return await Institution.findAll({ where: {category_id: categoryId}, include: models.all});
}

// Delete Institution By ID
const deleteInstitution = async (institutionId) => {
    return await Institution.destroy({ where: { id: institutionId } });
};

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
    findAllInstitutions,
    findInstitutionById,
    createInstitution,
    findAllInstitutionsByCategory,
    deleteInstitution,
};