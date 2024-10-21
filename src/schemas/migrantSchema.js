import Joi from 'joi';

// Standard error messages
const messages = {
    full_name: {
        'string.base': `"Nome completo" deve ser um texto.`,
        'string.empty': `"Nome completo" é obrigatório.`,
        'string.max': `"Nome completo" deve ter no máximo {#limit} caracteres.`,
        'any.required': `"Nome completo" é um campo obrigatório.`
    },
    social_name: {
        'string.base': `"Nome social" deve ser um texto.`,
        'string.max': `"Nome social" deve ter no máximo {#limit} caracteres.`
    },
    date_birth: {
        'date.base': `"Data de nascimento" deve ser uma data válida.`,
        'any.required': `"Data de nascimento" é obrigatória.`
    },
    preferred_language: {
        'string.base': `"Língua preferida" deve ser um texto.`,
        'string.empty': `"Língua preferida" é obrigatória.`,
        'string.max': `"Língua preferida" deve ter no máximo {#limit} caracteres.`,
        'any.required': `"Língua preferida" é um campo obrigatório.`
    },
    entry_date: {
        'date.base': `"Data de entrada" deve ser uma data válida.`,
        'any.required': `"Data de entrada" é obrigatória.`
    },
    address_complement: {
        'string.base': `"Complemento de endereço" deve ser um texto.`,
        'string.max': `"Complemento de endereço" deve ter no máximo {#limit} caracteres.`
    },
    address_number: {
        'string.base': `"Número do endereço" deve ser um texto.`,
        'string.max': `"Número do endereço" deve ter no máximo {#limit} caracteres.`
    },
    email: {
        'string.email': `"Email" deve ser um email válido.`,
        'string.max': `"Email" deve ter no máximo {#limit} caracteres.`,
        'string.empty': `"Email" é obrigatório.`
    },
    phone: {
        'string.base': `"Telefone" deve ser um texto.`,
        'string.max': `"Telefone" deve ter no máximo {#limit} caracteres.`
    },
    phone_whatsapp: {
        'boolean.base': `"WhatsApp" deve ser um valor booleano.`
    },
    authorized: {
        'boolean.base': `"Autorizado" deve ser um valor booleano.`,
        'any.required': `"Autorizado" é um campo obrigatório.`
    },
    migrant_reason: {
        'string.base': `"Razão do migrante" deve ser um texto.`,
        'string.empty': `"Razão do migrante" é obrigatória.`,
        'string.max': `"Razão do migrante" deve ter no máximo {#limit} caracteres.`,
        'any.required': `"Razão do migrante" é um campo obrigatório.`
    },
    gender: {
        'string.base': `"Gênero" deve ser um texto.`,
        'string.empty': `"Gênero" é obrigatório.`,
        'string.max': `"Gênero" deve ter no máximo {#limit} caracteres.`,
        'any.required': `"Gênero" é um campo obrigatório.`
    },
    nationality: {
        'string.base': `"Nacionalidade" deve ser um texto.`,
        'string.empty': `"Nacionalidade" é obrigatória.`,
        'string.max': `"Nacionalidade" deve ter no máximo {#limit} caracteres.`,
        'any.required': `"Nacionalidade" é um campo obrigatório.`
    },
    marital_status: {
        'string.base': `"Estado civil" deve ser um texto.`,
        'string.empty': `"Estado civil" é obrigatório.`,
        'string.max': `"Estado civil" deve ter no máximo {#limit} caracteres.`,
        'any.required': `"Estado civil" é um campo obrigatório.`
    },
    education_level: {
        'string.base': `"Nível de educação" deve ser um texto.`,
        'string.max': `"Nível de educação" deve ter no máximo {#limit} caracteres.`
    },
    social_program_access: {
        'string.base': `"Acesso a programas sociais" deve ser um texto.`,
        'string.max': `"Acesso a programas sociais" deve ter no máximo {#limit} caracteres.`
    },
    status_migratory: {
        'string.base': `"Status migratório" deve ser um texto.`,
        'string.empty': `"Status migratório" é obrigatório.`,
        'string.max': `"Status migratório" deve ter no máximo {#limit} caracteres.`,
        'any.required': `"Status migratório" é um campo obrigatório.`
    },
    password: {
        'string.base': `"Senha" deve ser um texto.`,
        'string.empty': `"Senha" é obrigatória.`,
        'string.min': `"Senha" deve ter pelo menos {#limit} caracteres.`,
        'any.required': `"Senha" é um campo obrigatório.`
    },
    is_pcd: {
        'boolean.base': `"PCD" deve ser um valor booleano.`,
        'any.required': `"PCD" é um campo obrigatório.`
    }
};

// Validation schema
const migrantSchema = Joi.object({
    full_name: Joi.string().max(150).required().messages(messages.full_name),
    social_name: Joi.string().max(150).messages(messages.social_name),
    date_birth: Joi.date().required().messages(messages.date_birth),
    preferred_language: Joi.string().max(100).required().messages(messages.preferred_language),
    entry_date: Joi.date().required().messages(messages.entry_date),
    address_complement: Joi.string().max(120).messages(messages.address_complement),
    address_number: Joi.string().max(10).messages(messages.address_number),
    email: Joi.string().email().max(100).messages(messages.email),
    phone: Joi.string().max(20).messages(messages.phone),
    phone_whatsapp: Joi.boolean().messages(messages.phone_whatsapp),
    authorized: Joi.boolean().required().messages(messages.authorized),
    migrant_reason: Joi.string().max(255).required().messages(messages.migrant_reason),
    gender: Joi.string().max(80).required().messages(messages.gender),
    nationality: Joi.string().max(120).required().messages(messages.nationality),
    marital_status: Joi.string().max(120).required().messages(messages.marital_status),
    education_level: Joi.string().max(120).messages(messages.education_level),
    social_program_access: Joi.string().max(255).messages(messages.social_program_access),
    status_migratory: Joi.string().max(255).required().messages(messages.status_migratory),
    password: Joi.string().min(6).required().messages(messages.password),
    is_pcd: Joi.boolean().required().messages(messages.is_pcd)
});

export default migrantSchema;
