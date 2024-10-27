import Form from "../models/Form.js";

const findAllForms = async () => {
    return await Form.findAll({
        order:[ 
            ['id', 'DESC']
        ],
    });
};

const findFormById = async (id) => {
    return await Form.findByPk(id);
};

const createForm= async (form) => {
    return await Form.create({...form});
};

// Delete Form By ID
const deleteForm = async (formId) => {
    return await Form.destroy({ where: { id: formId } });
};

export default {
    findAllForms,
    findFormById,
    createForm,
    deleteForm,
};