import addressSchema from './addressSchema.js';

import Joi from 'joi';

const messages = {
    name: {
        'string.base': "Nome deve ser um texto",
        'string.empty': "Nome não pode estar vazio",
        'string.min': "Nome deve ter no mínimo {#limit} caracteres",
        'string.max': "Nome deve ter no máximo {#limit} caracteres",
        'any.required': "Nome é obrigatório",
    },
    main_phone: {
        'string.pattern.base': "O primeiro telefone deve ser um número válido.",
        'any.required': "O primeiro telefone é necessário.",
        'string.empty': "O primeiro telefone não pode estar vazio."
    },
    secondary_phone: {
        'string.pattern.base': "O segundo telefone deve ser um número válido.",
        'string.empty': "O segundo telefone não pode estar vazio se fornecido."
    },
    instagram: {
        'string.pattern.base': "O usuário do Instagram deve ser um nome de usuário válido."
    },
    number_address: {
        'any.required': "O número do endereço é obrigatório.",
        'number.base': "O número do endereço deve ser um número válido.",
    },
    address_complement: {
        'string.base': `Complemento do Endereço deve ser um texto.`,
        'string.empty': `Complemento do Endereço não pode estar vazio.`,
        'string.min': `Complemento do Endereço deve ter pelo menos {#limit} caracteres.`,
        'string.max': `Complemento do Endereço deve ter no máximo {#limit} caracteres.`,
        'any.required': `Complemento inválido.`
    }
};

const serviceStationSchema = {
    
    // Validating name
    name: Joi.string().min(10).max(200).required().messages(messages.name),

    // Validating main phone
    main_phone: Joi.string().pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/).required().messages(messages.mainPhone),

    // Validating optional Phone
    secondary_phone: Joi.string().pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/).optional().messages(messages.secondaryPhone),

    // Validating instagram
    instagram: Joi.string().optional().pattern(/^@?[a-zA-Z0-9_.-]{1,40}$/).messages(messages.instagram),

    // Validating address number
    number_address: Joi.string().min(1).max(10).optional().messages(messages.numberAddress),

    // Validating address complement
    address_complement: Joi.string().min(15).max(150).optional().messages(messages.addressComplement),

    // Validating address
    address: addressSchema.required().messages(messages.address),
};

export default serviceStationSchema;