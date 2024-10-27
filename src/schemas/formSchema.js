import Joi from 'joi';

// Standard error messages in Portuguese
const messages = {
    subject: {
        'string.base': "O assunto deve ser um texto.",
        'string.empty': "O assunto não pode estar vazio.",
        'string.min': "O assunto deve ter no mínimo {#limit} caracteres.",
        'string.max': "O assunto deve ter no máximo {#limit} caracteres.",
        'any.required': "O assunto é obrigatório.",
    },
    message: {
        'string.base': "A mensagem deve ser um texto.",
        'string.empty': "A mensagem não pode estar vazia.",
        'string.min': "A mensagem deve ter no mínimo {#limit} caracteres.",
        'string.max': "A mensagem deve ter no máximo {#limit} caracteres.",
        'any.required': "A mensagem é obrigatória.",
    },
    phone: {
        'string.pattern.base': "O telefone fornecido deve ser um número válido.",
        'string.empty': "O telefone não pode estar vazio.",
        'any.required': "O telefone é obrigatório.",
    },
    name: {
        'string.base': "O nome deve ser um texto.",
        'string.empty': "O nome não pode estar vazio.",
        'string.min': "O nome deve ter no mínimo {#limit} caracteres.",
        'string.max': "O nome deve ter no máximo {#limit} caracteres.",
        'any.required': "O nome é obrigatório.",
    },
    email: {
        'string.email': "O e-mail deve ser válido.",
        'any.required': "O e-mail é obrigatório.",
        'string.empty': "O e-mail não pode estar vazio.",
    },
};

// Validation scheme
const formSchema = Joi.object({
    subject: Joi.string().min(5).max(150).required().messages(messages.subject),
    message: Joi.string().min(10).max(700).required().messages(messages.message),
    phone: Joi.string().pattern(/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/).required().messages(messages.phone),
    name: Joi.string().min(2).max(100).required().messages(messages.name),
    email: Joi.string().email().max(100).required().messages(messages.email),
});

export default formSchema;
