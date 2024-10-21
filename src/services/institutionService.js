import Institution from "../models/Institution.js";
import Category from "../models/Category.js";
import Address from "../models/Address.js";

const findAllInstitutions = async () => {
    return await Institution.findAll({
        order:[ 
            ['id', 'DESC']
        ],
        include: [{model: Category}, {model: Address}],
    });
};

const findInstitutionById = async (id) => {
    return await Institution.findByPk(id, {
      include: [{model: Category}, {model: Address}]
    });
};

const createInstitution= async (institution, addressId) => {
    return await Institution.create({
        ...institution,
        address_id: addressId
    });
};

export default {
    findAllInstitutions,
    findInstitutionById,
    createInstitution,
};