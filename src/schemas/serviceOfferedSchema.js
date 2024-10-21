import Joi from 'joi';

// Standard error messages
const messages = {
    service_offered_pt: {
        'string.base': 'O serviço oferecido deve ser um texto.',
        'string.empty': 'O serviço oferecido em português é obrigatório.',
        'string.min': 'O serviço oferecido em português deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O serviço oferecido em português deve ter no máximo {#limit} caracteres.',
        'any.required': 'O serviço oferecido em português é um campo obrigatório.'
    },
    service_offered_en: {
        'string.base': 'O serviço oferecido em inglês deve ser um texto.',
        'string.empty': 'O serviço oferecido em inglês é obrigatório.',
        'string.min': 'O serviço oferecido em inglês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O serviço oferecido em inglês deve ter no máximo {#limit} caracteres.',
        'any.required': 'O serviço oferecido em inglês é um campo obrigatório.'
    },
    service_offered_es: {
        'string.base': 'O serviço oferecido em espanhol deve ser um texto.',
        'string.empty': 'O serviço oferecido em espanhol é obrigatório.',
        'string.min': 'O serviço oferecido em espanhol deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O serviço oferecido em espanhol deve ter no máximo {#limit} caracteres.',
        'any.required': 'O serviço oferecido em espanhol é um campo obrigatório.'
    },
    service_offered_fr: {
        'string.base': 'O serviço oferecido em francês deve ser um texto.',
        'string.empty': 'O serviço oferecido em francês é obrigatório.',
        'string.min': 'O serviço oferecido em francês deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O serviço oferecido em francês deve ter no máximo {#limit} caracteres.',
        'any.required': 'O serviço oferecido em francês é um campo obrigatório.'
    }
};

// Validation scheme
const serviceOfferedSchema = Joi.object({
    service_offered_pt: Joi.string().min(3).max(255).required().messages(messages.service_offered_pt),
    service_offered_en: Joi.string().min(3).max(255).required().messages(messages.service_offered_en),
    service_offered_es: Joi.string().min(3).max(255).required().messages(messages.service_offered_es),
    service_offered_fr: Joi.string().min(3).max(255).required().messages(messages.service_offered_fr),
});

export default serviceOfferedSchema;
