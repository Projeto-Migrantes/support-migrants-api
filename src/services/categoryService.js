import Category from "../models/Category.js";

const findAllCategories = async () => {
    return await Category.findAll();
};

export default {
    findAllCategories
};