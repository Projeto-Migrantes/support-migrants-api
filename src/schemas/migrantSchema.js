import Joi from 'joi';

// Standard error messages
const messages = {
    name: {
        'string.base': "O nome deve ser um texto.",
        'string.empty': "O nome não pode estar vazio.",
        'string.min': "O nome deve ter pelo menos {#limit} caracteres.",
        'string.max': "O nome deve ter no máximo {#limit} caracteres.",
        'any.required': "O nome é obrigatório.",
    },
    passport: {
        'string.base': "A passport deve ser um texto.",
        'string.length': "A passport deve ter exatamente {#limit} caracteres.",
    },
    email: {
        'string.base': "O e-mail deve ser um texto.",
        'string.email': "O e-mail deve ser válido.",
    },
    date_of_birth: {
        'string.base': "A data de nascimento deve ser um texto.",
        'string.empty': "A data de nascimento não pode estar vazia.",
        'string.pattern.base': "A data de nascimento deve estar no formato dd/MM/yyyy.",
        'any.required': "A data de nascimento é obrigatória.",
    },
    gender: {
        'string.base': "O gênero deve ser um texto.",
        'string.empty': "O gênero não pode estar vazio.",
        'any.valid': "O gênero deve ser um dos valores válidos (ex: 'Masculino', 'Feminino', 'Outro').",
        'any.required': "O gênero é obrigatório.",
    },
    profession: {
        'string.base': "A profissão deve ser um texto.",
        'string.min': "A profissão deve ter pelo menos {#limit} caracteres.",
        'string.max': "A profissão deve ter no máximo {#limit} caracteres.",
    },
};

// Validation scheme
const migrantSchema = Joi.object({

    // Validating name
    name: Joi.string().min(3).max(100).required().messages(messages.name),

    // Validating passport
    passport: Joi.string().min(5).max(30).optional().messages(messages.passport),

    // Validating email
    email: Joi.string().email().min(10).max(100).optional().messages(messages.email),

    // Validating date of birth
    date_of_birth: Joi.string()
        .pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/) // Formato dd/MM/yyyy
        .required()
        .messages(messages.date_of_birth),

    // Validating gender
    gender: Joi.string().valid('Male', 'Female', 'Other').required().messages(messages.gender),

    // Validating profession
    profession: Joi.string().min(3).max(100).optional().messages(messages.profession),
});

export default migrantSchema;
