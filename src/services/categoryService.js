import Category from "../models/Category.js";

/*
* Function that fetches all categories from the database
*/
const findAllCategories = async () => {
    return await Category.findAll();
};

export default {
    findAllCategories
};