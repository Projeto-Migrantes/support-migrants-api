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

const updateForms = async (formsId, data) => {
  return await Form.update({...data}, {
    where: {id: formsId}
  });
};

const findFormsByStatus = async (status) => {
    return await Form.findAll({order:[ 
        ['id', 'DESC']
    ],
    where: {status}});
};

const createForm= async (form) => {
    return await Form.create({...form});
};

const countFormsPedding = async () => {
    return await Form.count({where: {status: 'unread'}});
};

const deleteForm = async (formId) => {
    return await Form.destroy({ where: { id: formId } });
};

export default {
    findAllForms,
    findFormById,
    createForm,
    deleteForm,
    findFormsByStatus,
    updateForms,
    countFormsPedding,
};