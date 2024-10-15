import Organization from "../models/Organization.js";
import Category from "../models/Category.js";
import Address from "../models/Address.js";

const findAllOrganizations = async () => {
    return await Organization.findAll({
        include: [{model: Category}, {model: Address}]
    });
};

const findOrganizationById = async (id) => {
    return await Organization.findByPk(id, {
      include: [{model: Category}]
    });
};

const createOrganization = async (req, res) => {
    return await Organization.create(req.body);
};

export default {
    findAllOrganizations,
    findOrganizationById,
    createOrganization,
};