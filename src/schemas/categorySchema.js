import Joi from 'joi';

// Standard error messages
const messages = {
    description: {
        'string.base': 'A descrição deve ser um texto.',
        'string.empty': 'A descrição é obrigatória.',
        'string.min': 'A descrição deve ter pelo menos {#limit} caracteres.',
        'string.max': 'A descrição deve ter no máximo {#limit} caracteres.',
        'any.required': 'A descrição é um campo obrigatório.'
    }
};

// Validation scheme
const categorySchema = Joi.object({
    description: Joi.string().min(3).max(50).required().messages(messages.description)
});

export default categorySchema;