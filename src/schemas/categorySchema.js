import Joi from 'joi';

// Standard error messages
const messages = {
    description: {
        'string.base': 'A categoria deve ser um texto.',
        'string.empty': 'A categoria é obrigatória.',
        'string.min': 'A categoria deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A categoria deve ter no máximo {#limit} caracteres.',
        'any.required': 'A categoria é um campo obrigatório.'
    }
};

// Validation scheme
const categorySchema = Joi.object({
    description: Joi.string().min(3).max(50).required().messages(messages.description)
});

export default categorySchema;