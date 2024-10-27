import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    name: {
        'string.base': "O nome deve ser um texto.",
        'string.empty': "O nome não pode estar vazio.",
        'string.min': "O nome deve ter no mínimo {#limit} caracteres.",
        'string.max': "O nome deve ter no máximo {#limit} caracteres.",
        'any.required': "O nome é obrigatório.",
    },
    description: {
        'string.base': "A descrição deve ser um texto.",
        'string.empty': "A descrição não pode estar vazia.",
        'string.max': "A descrição deve ter no máximo {#limit} caracteres.",
    },
    url: {
        'string.base': "A URL deve ser um texto.",
        'string.empty': "A URL não pode estar vazia.",
        'any.required': "A URL é obrigatória.",
    },
    language: {
        'string.base': "O idioma deve ser um texto.",
        'string.empty': "O idioma não pode estar vazio.",
        'any.required': "O idioma é obrigatório.",
        'any.only': "O idioma deve ser um dos seguintes: en, es, fr, pt.",
    },
};

// Validation schema
const pdfSchema = Joi.object({
    name: Joi.string().min(1).max(150).required().messages(messages.name),
    description: Joi.string().max(500).optional().messages(messages.description),
    url: Joi.string().uri().required().messages(messages.url),
    language: Joi.string().valid('en', 'es', 'fr', 'pt').required().messages(messages.language),
});

export default pdfSchema;
