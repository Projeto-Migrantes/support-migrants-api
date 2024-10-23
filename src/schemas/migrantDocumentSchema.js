import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    document_type: {
        'string.base': 'O tipo de documento deve ser um texto.',
        'string.empty': 'O tipo de documento é obrigatório.',
        'string.min': 'O tipo de documento deve ter pelo menos {#limit} caracteres.',
        'string.max': 'O tipo de documento deve ter no máximo {#limit} caracteres.',
        'any.required': 'O tipo de documento é um campo obrigatório.'
    },
    document_identification: {
        'string.base': 'A identificação do documento deve ser um texto.',
        'string.empty': 'A identificação do documento é obrigatória.',
        'string.min': 'A identificação do documento deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A identificação do documento deve ter no máximo {#limit} caracteres.',
        'any.required': 'A identificação do documento é um campo obrigatório.'
    }
};

// Validation schema
const migrantDocumentSchema = Joi.object({
    document_type: Joi.string().min(1).max(120).required().messages(messages.document_type),
    document_identification: Joi.string().min(1).max(120).required().messages(messages.document_identification),
});

export default migrantDocumentSchema;
