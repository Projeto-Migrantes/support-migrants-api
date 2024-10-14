import Joi from 'joi';
import Nationality from '../models/Nationality.js';

const messages = {
    nationalitySchema: {
    'string.base': 'A Nacionalidade deve ser um texto.',
    'string.empty': 'A Nacionalidade é obrigatória.',
    'string.min': 'A Nacionalidade deve ter pelo menos {#limit} caracteres.',
    'string.max': 'A Nacionalidade deve ter no máximo {#limit} caracteres.',    
    'any.required': 'O Nacionalidade é obrigatório',
    }
};

const nationalitySchema = Joi.object({
    nationality: Joi.string().min(3).max(45).required().messages(messages.nationality),
});

export default nationalitySchema;