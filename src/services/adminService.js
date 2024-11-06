import Admin from "../models/Admin.js";

const findOneAdminByName = async (userName) => {
    return await Admin.scope('withPassword').findOne({
        raw: true, where: { userName }
    });
};

export default {
    findOneAdminByName,
};