import Organization from "../models/Organization.js";
import Category from "../models/Category.js";
import Address from "../models/Address.js";

const findAllOrganizations = async () => {
    return await Organization.findAll({
        order:[ 
            ['id', 'DESC']
        ],
        include: [{model: Category}, {model: Address}],
    });
};

const findOrganizationById = async (id) => {
    return await Organization.findByPk(id, {
      include: [{model: Category}, {model: Address}]
    });
};

const createOrganization = async (organization, addressId) => {
    return await Organization.create({
        ...organization,
        address_id: addressId
    });
};

export default {
    findAllOrganizations,
    findOrganizationById,
    createOrganization,
};