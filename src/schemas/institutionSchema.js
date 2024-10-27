import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    name: {
        'string.base': "Nome da instituição deve ser um texto",
        'string.empty': "Nome da instituição não pode estar vazio",
        'string.min': "Nome da instituição deve ter no mínimo {#limit} caracteres",
        'string.max': "Nome da instituição deve ter no máximo {#limit} caracteres",
        'any.required': "Nome da instituição é obrigatório",
    },
    cnpj: {
        'string.pattern.base': "O CNPJ fornecido é inválido.",
        'string.empty': "O campo CNPJ não pode estar vazio.",
        'any.required': "O CNPJ é obrigatório e deve ser informado.",

    },
    mainPhone: {
        'string.pattern.base': "O primeiro telefone deve ser um número válido.",
        'any.required': "O primeiro telefone é necessário.",
        'string.empty': "O primeiro telefone não pode estar vazio."
    },
    secondaryPhone: {
        'string.pattern.base': "O segundo telefone deve ser um número válido.",
        'string.empty': "O segundo telefone não pode estar vazio se fornecido."
    },
    email: {
        'string.email': "O e-mail deve ser válido.",
        'any.required': "O e-mail é obrigatório.",
        'string.empty': "O e-mail não pode estar vazio."
    },
    instagram: {
        'string.pattern.base': "O usuário do Instagram deve ser um nome de usuário válido."
    },
    numberAddress: {
        'any.required': "O número do endereço é obrigatório.",
        'number.base': "O número do endereço deve ser um número válido.",
    },
    site: {
        'string.pattern.base': 'A URL deve começar com "www." e ser uma URL válida.',
        'string.empty': 'A URL não pode estar vazia.'
    },
    authorized: {
        'any.required': 'O campo "authorized" é obrigatório.',
        'boolean.base': 'O campo "authorized" deve ser um valor booleano (true ou false).'
    },
    main_language: {
        'string.base': 'Primeiro idioma deve ser um texto.',
        'string.empty': 'Primeiro idioma não pode estar vazio.',
        'string.min': 'Primeiro idioma deve ter pelo menos {#limit} caracteres.',
        'string.max': 'Primeiro idioma deve ter no máximo {#limit} caracteres.',
        'any.required': 'Primeiro idioma é obrigatório.'
    },
    second_language: {
        'string.base': 'Segundo idioma deve ser um texto.',
        'string.empty': 'Segundo idioma não pode estar vazio.',
        'string.min': 'Segundo idioma deve ter pelo menos {#limit} caracteres.',
        'string.max': 'Segundo idioma deve ter no máximo {#limit} caracteres.',
        'any.required': 'Segundo idioma" é obrigatório.'
    },
    addressComplement: {
        'string.base': `Complemento do Endereço deve ser um texto.`,
        'string.empty': `Complemento do Endereço não pode estar vazio.`,
        'string.min': `Complemento do Endereço deve ter pelo menos {#limit} caracteres.`,
        'string.max': `Complemento do Endereço deve ter no máximo {#limit} caracteres.`,
        'any.required': `Complemento inválido.`
    },
    category: {
        'any.required': `Categoria é obrigatória.`
    },
    link_maps: {
        'string.base': `O link deve ser um texto.`,
        'string.min': `O link deve ter pelo menos {#limit} caracteres.`,
        'string.max': `O link deve ter no máximo {#limit} caracteres.`,
        'any.required': `Link inválido.`
    }
};

// Validation scheme
const institutionSchema = Joi.object({

    // Validating name
    name: Joi.string().min(2).max(200).required().messages(messages.name),

    // Validating CNPJ
    cnpj: Joi.string().pattern(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/).required().messages(messages.cnpj),

    // Validating email
    email: Joi.string().email().min(10).max(100).required().messages(messages.email),

    // Validating main phone
    main_phone: Joi.string().pattern(/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/).required().messages(messages.mainPhone),

    // Validating optional Phone
    secondary_phone: Joi.string().pattern(/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/).optional().messages(messages.secondaryPhone),

    // Validating address complement
    address_complement: Joi.string().min(2).max(150).optional().messages(messages.addressComplement),

    // Validating address number
    address_number: Joi.string().min(1).max(10).optional().messages(messages.numberAddress),
    
    // Validating site
    site: Joi.string().max(2000).optional().messages(messages.site),

    // Validating instagram
    instagram: Joi.string().optional().pattern(/^@[a-zA-Z0-9._]{2,40}$/).messages(messages.instagram),

    // Validating authorized
    authorized: Joi.boolean().required().messages(messages.authorized),

    // Validating Main Language
    main_language: Joi.string().min(2).max(80).required().messages(messages.main_language),

    // Validating Main Language
    second_language: Joi.string().min(2).max(80).required().messages(messages.second_language),

    // Validating link maps
    link_maps: Joi.string().min(5).max(2000).optional().messages(messages.link_maps),

    // Validating category
    category_id: Joi.number().min(1).required().messages(messages.category),
});

export default institutionSchema;
