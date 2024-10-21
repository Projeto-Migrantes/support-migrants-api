import Joi from 'joi';

// Standard error messages
const messages = {
    category_pt: {
        'string.base': 'A categoria deve ser um texto.',
        'string.empty': 'A categoria é obrigatória.',
        'string.min': 'A categoria deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A categoria deve ter no máximo {#limit} caracteres.',
        'any.required': 'A categoria é um campo obrigatório.'
    },
    category_en: {
        'string.base': 'A categoria deve ser um texto em inglês.',
        'string.empty': 'A categoria em inglês é obrigatória.',
        'string.min': 'A categoria em inglês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A categoria em inglês deve ter no máximo {#limit} caracteres.',
        'any.required': 'A categoria em inglês é um campo obrigatório.'
    },
    category_es: {
        'string.base': 'A categoria deve ser um texto em espanhol.',
        'string.empty': 'A categoria em espanhol é obrigatória.',
        'string.min': 'A categoria em espanhol deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A categoria em espanhol deve ter no máximo {#limit} caracteres.',
        'any.required': 'A categoria em espanhol é um campo obrigatório.'
    },
    category_fr: {
        'string.base': 'A categoria deve ser um texto em francês.',
        'string.empty': 'A categoria em francês é obrigatória.',
        'string.min': 'A categoria em francês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A categoria em francês deve ter no máximo {#limit} caracteres.',
        'any.required': 'A categoria em francês é um campo obrigatório.'
    }
};

// Validation scheme
const categoriesSchema = Joi.object({
    category_pt: Joi.string().min(3).max(100).required().messages(messages.category_pt),
    category_en: Joi.string().min(3).max(100).required().messages(messages.category_en),
    category_es: Joi.string().min(3).max(100).required().messages(messages.category_es),
    category_fr: Joi.string().min(3).max(100).required().messages(messages.category_fr),
});

export default categoriesSchema;
