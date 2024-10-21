import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    description_pt: {
        'string.base': 'A descrição em português deve ser um texto.',
        'string.empty': 'A descrição em português é obrigatória.',
        'string.min': 'A descrição em português deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A descrição em português deve ter no máximo {#limit} caracteres.',
        'any.required': 'A descrição em português é um campo obrigatório.'
    },
    description_en: {
        'string.base': 'A descrição em inglês deve ser um texto.',
        'string.empty': 'A descrição em inglês é obrigatória.',
        'string.min': 'A descrição em inglês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A descrição em inglês deve ter no máximo {#limit} caracteres.',
        'any.required': 'A descrição em inglês é um campo obrigatório.'
    },
    description_es: {
        'string.base': 'A descrição em espanhol deve ser um texto.',
        'string.empty': 'A descrição em espanhol é obrigatória.',
        'string.min': 'A descrição em espanhol deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A descrição em espanhol deve ter no máximo {#limit} caracteres.',
        'any.required': 'A descrição em espanhol é um campo obrigatório.'
    },
    description_fr: {
        'string.base': 'A descrição em francês deve ser um texto.',
        'string.empty': 'A descrição em francês é obrigatória.',
        'string.min': 'A descrição em francês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A descrição em francês deve ter no máximo {#limit} caracteres.',
        'any.required': 'A descrição em francês é um campo obrigatório.'
    }
};

// Validation schema
const institutionDescriptionSchema = Joi.object({
    // Description in Portuguese
    description_pt: Joi.string().min(3).max(1000).required().messages(messages.description_pt),

    // Description in English
    description_en: Joi.string().min(3).max(1000).required().messages(messages.description_en),

    // Description in Spanish
    description_es: Joi.string().min(3).max(1000).required().messages(messages.description_es),

    // Description in French
    description_fr: Joi.string().min(3).max(1000).required().messages(messages.description_fr),
});

export default institutionDescriptionSchema;
