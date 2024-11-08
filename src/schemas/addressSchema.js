import Joi from 'joi';

// Standard error messages
const messages = {

    cep: {
        'string.base': `"CEP" deve ser um texto.`,
        'string.pattern.base': `"CEP" deve seguir o formato 12345-678.`,
        'any.required': `"CEP" é obrigatório.`
    },
    city: {
        'string.base': `"Cidade" deve ser um texto.`,
        'any.required': `"Cidade" é obrigatória.`
    },
    state: {
        'string.base': `"Estado" deve ser um texto.`,
        'any.required': `"Estado" é obrigatório.`
    },
    neighborhood: {
        'string.base': `"Bairro" deve ser um texto.`,
        'any.required': `"Bairro" é obrigatório.`
    },
    street: {
        'string.base': `"Logradouro" deve ser um texto.`,
        'any.required': `"Logradouro" é obrigatório.`
    }

};

// Validation scheme
const addressSchema = Joi.object({
    cep: Joi.string().pattern(/^\d{5}-?\d{3}$/).required().messages(messages.cep),
    city: Joi.string().min(3).max(150).required().messages(messages.city),
    state: Joi.string().min(3).max(150).required().messages(messages.state),
    neighborhood: Joi.string().min(3).max(300).required().messages(messages.neighborhood),
    street: Joi.string().min(2).max(300).required().messages(messages.street)
});

export default addressSchema;