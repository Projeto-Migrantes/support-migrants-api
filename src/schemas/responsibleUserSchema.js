import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    name: {
        'string.base': 'O nome deve ser um texto.',
        'string.empty': 'O nome é obrigatório.',
        'string.min': 'O nome deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O nome deve ter no máximo {#limit} caracteres.',
        'any.required': 'O nome é um campo obrigatório.'
    },
    position: {
        'string.base': 'A posição deve ser um texto.',
        'string.empty': 'A posição é obrigatória.',
        'string.min': 'A posição deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A posição deve ter no máximo {#limit} caracteres.',
        'any.required': 'A posição é um campo obrigatório.'
    },
    sector: {
        'string.base': 'O setor deve ser um texto.',
        'string.empty': 'O setor é obrigatório.',
        'string.min': 'O setor deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O setor deve ter no máximo {#limit} caracteres.',
        'any.required': 'O setor é um campo obrigatório.'
    },
    function: { 
        'string.base': 'A função deve ser um texto.',
        'string.empty': 'A função é obrigatória.',
        'string.min': 'A função deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A função deve ter no máximo {#limit} caracteres.',
        'any.required': 'A função é um campo obrigatório.'
    }
};

// Validation schema
const responsibleUserSchema = Joi.object({
    name: Joi.string().min(1).max(255).required().messages(messages.name),
    position: Joi.string().min(1).max(80).required().messages(messages.position),
    sector: Joi.string().min(1).max(80).required().messages(messages.sector),
    role: Joi.string().min(1).max(80).required().messages(messages.function), 
});

export default responsibleUserSchema;
