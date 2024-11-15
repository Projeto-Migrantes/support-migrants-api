import Form from "../models/Form.js";

/*
* Function that fetches all forms from the database
*/
const findAllForms = async () => {
    return await Form.findAll({
        order:[ 
            ['id', 'DESC']
        ],
    });
};

/*
* Function that fetches a form by id
*/
const findFormById = async (id) => {
    return await Form.findByPk(id);
};

/*
* Function that updates a form
*/
const updateForms = async (formsId, data) => {
  return await Form.update({...data}, {
    where: {id: formsId}
  });
};

/*
* Function that fetches all forms by status
*/
const findFormsByStatus = async (status) => {
    return await Form.findAll({order:[ 
        ['id', 'DESC']
    ],
    where: {status}});
};

/*
* Function that creates a new form using the provided data
*/
const createForm= async (form) => {
    return await Form.create({...form});
};

/*
* Function that counts all forms with status unread
*/
const countFormsPedding = async () => {
    return await Form.count({where: {status: 'unread'}});
};

/*
* Function that deletes a form
*/
const deleteForm = async (formId) => {
    return await Form.destroy({ where: { id: formId } });
};

export default {
    findAllForms, findFormById, createForm,
    deleteForm,  findFormsByStatus, updateForms,
    countFormsPedding,
};