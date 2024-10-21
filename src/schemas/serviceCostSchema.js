import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    service_cost_pt: {
        'string.base': 'O custo do serviço em português deve ser um texto.',
        'string.empty': 'O custo do serviço em português é obrigatório.',
        'string.min': 'O custo do serviço em português deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O custo do serviço em português deve ter no máximo {#limit} caracteres.',
        'any.required': 'O custo do serviço em português é um campo obrigatório.'
    },
    service_cost_en: {
        'string.base': 'O custo do serviço em inglês deve ser um texto.',
        'string.empty': 'O custo do serviço em inglês é obrigatório.',
        'string.min': 'O custo do serviço em inglês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O custo do serviço em inglês deve ter no máximo {#limit} caracteres.',
        'any.required': 'O custo do serviço em inglês é um campo obrigatório.'
    },
    service_cost_es: {
        'string.base': 'O custo do serviço em espanhol deve ser um texto.',
        'string.empty': 'O custo do serviço em espanhol é obrigatório.',
        'string.min': 'O custo do serviço em espanhol deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O custo do serviço em espanhol deve ter no máximo {#limit} caracteres.',
        'any.required': 'O custo do serviço em espanhol é um campo obrigatório.'
    },
    service_cost_fr: {
        'string.base': 'O custo do serviço em francês deve ser um texto.',
        'string.empty': 'O custo do serviço em francês é obrigatório.',
        'string.min': 'O custo do serviço em francês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O custo do serviço em francês deve ter no máximo {#limit} caracteres.',
        'any.required': 'O custo do serviço em francês é um campo obrigatório.'
    }
};

// Validation schema
const serviceCostSchema = Joi.object({
    // Service cost in Portuguese
    service_cost_pt: Joi.string().min(3).max(255).required().messages(messages.service_cost_pt),

    // Service cost in English
    service_cost_en: Joi.string().min(3).max(255).required().messages(messages.service_cost_en),

    // Service cost in Spanish
    service_cost_es: Joi.string().min(3).max(255).required().messages(messages.service_cost_es),

    // Service cost in French
    service_cost_fr: Joi.string().min(3).max(255).required().messages(messages.service_cost_fr),
});

export default serviceCostSchema;
