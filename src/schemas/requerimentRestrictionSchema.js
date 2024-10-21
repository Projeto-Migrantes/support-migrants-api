import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    requeriment_restriction_pt: {
        'string.base': 'O requerimento/restrição em português deve ser um texto.',
        'string.empty': 'O requerimento/restrição em português é obrigatório.',
        'string.min': 'O requerimento/restrição em português deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O requerimento/restrição em português deve ter no máximo {#limit} caracteres.',
        'any.required': 'O requerimento/restrição em português é um campo obrigatório.'
    },
    requeriment_restriction_en: {
        'string.base': 'O requerimento/restrição em inglês deve ser um texto.',
        'string.empty': 'O requerimento/restrição em inglês é obrigatório.',
        'string.min': 'O requerimento/restrição em inglês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O requerimento/restrição em inglês deve ter no máximo {#limit} caracteres.',
        'any.required': 'O requerimento/restrição em inglês é um campo obrigatório.'
    },
    requeriment_restriction_es: {
        'string.base': 'O requerimento/restrição em espanhol deve ser um texto.',
        'string.empty': 'O requerimento/restrição em espanhol é obrigatório.',
        'string.min': 'O requerimento/restrição em espanhol deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O requerimento/restrição em espanhol deve ter no máximo {#limit} caracteres.',
        'any.required': 'O requerimento/restrição em espanhol é um campo obrigatório.'
    },
    requeriment_restriction_fr: {
        'string.base': 'O requerimento/restrição em francês deve ser um texto.',
        'string.empty': 'O requerimento/restrição em francês é obrigatório.',
        'string.min': 'O requerimento/restrição em francês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O requerimento/restrição em francês deve ter no máximo {#limit} caracteres.',
        'any.required': 'O requerimento/restrição em francês é um campo obrigatório.'
    }
};

// Validation schema
const requerimentRestrictionSchema = Joi.object({
    // Requeriment/Restriction in Portuguese
    requeriment_restriction_pt: Joi.string().min(3).max(255).required().messages(messages.requeriment_restriction_pt),

    // Requeriment/Restriction in English
    requeriment_restriction_en: Joi.string().min(3).max(255).required().messages(messages.requeriment_restriction_en),

    // Requeriment/Restriction in Spanish
    requeriment_restriction_es: Joi.string().min(3).max(255).required().messages(messages.requeriment_restriction_es),

    // Requeriment/Restriction in French
    requeriment_restriction_fr: Joi.string().min(3).max(255).required().messages(messages.requeriment_restriction_fr),
});

export default requerimentRestrictionSchema;
