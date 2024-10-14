import Joi from 'joi';
import MaritalStatus from '../models/MaritalStatus.js';

const messages = {
    maritalStatus: {
    'string.base': 'Estado Civil deve ser um texto.',
    'string.empty': 'A Estado Civil é obrigatória.',
    'string.min': 'A Estado Civil deve ter pelo menos {#limit} caracteres.',
    'string.max': 'A Estado Civil deve ter no máximo {#limit} caracteres.',    
    'any.required': 'O Estado Civil é obrigatório',
    }
};

const maritalStatusSchema = Joi.object({
    marital_status: Joi.string().min(3).max(45).required().messages(messages.maritalStatus),
});

export default maritalStatusSchema;