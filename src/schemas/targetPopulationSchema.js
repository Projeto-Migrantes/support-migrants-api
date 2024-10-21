import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    target_population_pt: {
        'string.base': 'A população alvo deve ser um texto.',
        'string.empty': 'A população alvo em português é obrigatória.',
        'string.min': 'A população alvo em português deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A população alvo em português deve ter no máximo {#limit} caracteres.',
        'any.required': 'A população alvo em português é um campo obrigatório.'
    },
    target_population_en: {
        'string.base': 'A população alvo em inglês deve ser um texto.',
        'string.empty': 'A população alvo em inglês é obrigatória.',
        'string.min': 'A população alvo em inglês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A população alvo em inglês deve ter no máximo {#limit} caracteres.',
        'any.required': 'A população alvo em inglês é um campo obrigatório.'
    },
    target_population_es: {
        'string.base': 'A população alvo em espanhol deve ser um texto.',
        'string.empty': 'A população alvo em espanhol é obrigatória.',
        'string.min': 'A população alvo em espanhol deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A população alvo em espanhol deve ter no máximo {#limit} caracteres.',
        'any.required': 'A população alvo em espanhol é um campo obrigatório.'
    },
    target_population_fr: {
        'string.base': 'A população alvo em francês deve ser um texto.',
        'string.empty': 'A população alvo em francês é obrigatória.',
        'string.min': 'A população alvo em francês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A população alvo em francês deve ter no máximo {#limit} caracteres.',
        'any.required': 'A população alvo em francês é um campo obrigatório.'
    }
};

// Validation scheme
const targetPopulationSchema = Joi.object({
    target_population_pt: Joi.string().min(3).max(255).required().messages(messages.target_population_pt),
    target_population_en: Joi.string().min(3).max(255).required().messages(messages.target_population_en),
    target_population_es: Joi.string().min(3).max(255).required().messages(messages.target_population_es),
    target_population_fr: Joi.string().min(3).max(255).required().messages(messages.target_population_fr),
});

export default targetPopulationSchema;
