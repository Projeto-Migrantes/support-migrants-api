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
    email: {
        'string.base': "O email deve ser um texto.",
        'string.empty': "O email não pode estar vazio.",
        'string.email': "O email deve ser um email válido.",
        'any.required': "O email é obrigatório.",
    },
    password: {
        'string.base': "A senha deve ser um texto.",
        'string.empty': "A senha não pode estar vazia.",
        'string.min': "A senha deve ter no mínimo {#limit} caracteres.",
        'any.required': "A senha é obrigatória.",
    },
    role: {
        'string.base': "A função deve ser um texto.",
        'string.empty': "A função  não pode estar vazio.",
        'any.required': "A função é obrigatório.",
    }
};

// Validation schema   
const userSchema = Joi.object({
    name: Joi.string().min(1).max(150).required().messages(messages.name),
    email: Joi.string().email().max(100).required().messages(messages.email),
    password: Joi.string().min(1).required().messages(messages.password),
    role: Joi.string().min(1).max(50).required().messages(messages.role),
});

export default userSchema;

