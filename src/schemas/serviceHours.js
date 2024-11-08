import Joi from 'joi';

// Standard error messages
const messages = {
    service_hours_pt: {
        'string.base': 'O horário de funcionamento deve ser um texto.',
        'string.empty': 'O horário de funcionamento em português é obrigatório.',
        'string.min': 'O horário de funcionamento em português deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O horário de funcionamento em português deve ter no máximo {#limit} caracteres.',
        'any.required': 'O horário de funcionamento em português é um campo obrigatório.'
    },
    service_hours_en: {
        'string.base': 'O horário de funcionamento em inglês deve ser um texto.',
        'string.empty': 'O horário de funcionamento em inglês é obrigatório.',
        'string.min': 'O horário de funcionamento em inglês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O horário de funcionamento em inglês deve ter no máximo {#limit} caracteres.',
        'any.required': 'O horário de funcionamento em inglês é um campo obrigatório.'
    },
    service_hours_es: {
        'string.base': 'O horário de funcionamento em espanhol deve ser um texto.',
        'string.empty': 'O horário de funcionamento em espanhol é obrigatório.',
        'string.min': 'O horário de funcionamento em espanhol deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O horário de funcionamento em espanhol deve ter no máximo {#limit} caracteres.',
        'any.required': 'O horário de funcionamento em espanhol é um campo obrigatório.'
    },
    service_hours_fr: {
        'string.base': 'O horário de funcionamento em francês deve ser um texto.',
        'string.empty': 'O horário de funcionamento em francês é obrigatório.',
        'string.min': 'O horário de funcionamento em francês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O horário de funcionamento em francês deve ter no máximo {#limit} caracteres.',
        'any.required': 'O horário de funcionamento em francês é um campo obrigatório.'
    }
};

// Validation schema
const serviceHoursSchema = Joi.object({
    // Service hours in Portuguese
    service_hours_pt: Joi.string().min(3).max(500).required().messages(messages.service_hours_pt),

    // Service hours in English
    service_hours_en: Joi.string().min(3).max(500).required().messages(messages.service_hours_en),

    // Service hours in Spanish
    service_hours_es: Joi.string().min(3).max(500).required().messages(messages.service_hours_es),

    // Service hours in French
    service_hours_fr: Joi.string().min(3).max(500).required().messages(messages.service_hours_fr),
});

export default serviceHoursSchema;
