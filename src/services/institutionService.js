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
        include: [
            Category, 
            Address, 
            ResponsibleUser, 
            InstitutionDescriptions,
            ServiceHours, 
            TargetPopulation, 
            RequirementRestriction, 
            ServicesOfferred, 
            ServiceCosts],
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

export default {
    findAllInstitutions,
    findInstitutionById,
    createInstitution,
};