const Joi = require('joi');

const mensagens = {
    nome: {
        'string.base': "O nome deve ser um texto.",
        'string.empty': "O nome não pode estar vazio.",
        'string.min': "O nome deve ter pelo menos {#limit} caracteres.",
        'string.max': "O nome deve ter no máximo {#limit} caracteres.",
        'any.required': "O nome é obrigatório.",
    },
    identificacao: {
        'string.base': "A identificação deve ser um texto.",
        'string.length': "A identificação deve ter exatamente {#limit} caracteres.",
    },
    email: {
        'string.base': "O e-mail deve ser um texto.",
        'string.email': "O e-mail deve ser válido.",
    },
    data_nascimento: {
        'string.base': "A data de nascimento deve ser um texto.",
        'string.empty': "A data de nascimento não pode estar vazia.",
        'string.pattern.base': "A data de nascimento deve estar no formato dd/MM/yyyy.",
        'any.required': "A data de nascimento é obrigatória.",
    },
    genero: {
        'string.base': "O gênero deve ser um texto.",
        'string.empty': "O gênero não pode estar vazio.",
        'any.valid': "O gênero deve ser um dos valores válidos (ex: 'Masculino', 'Feminino', 'Outro').",
        'any.required': "O gênero é obrigatório.",
    },
    profissao: {
        'string.base': "A profissão deve ser um texto.",
        'string.min': "A profissão deve ter pelo menos {#limit} caracteres.",
        'string.max': "A profissão deve ter no máximo {#limit} caracteres.",
    },
};

const migranteEsquema = Joi.object({

    // Validando Nome
    nome: Joi.string().min(3).max(100).required().messages(mensagens.nome),

    // Validando Identificação
    identificacao: Joi.string().min(5).max(30).optional().messages(mensagens.identificacao),

    // Validando Email
    email: Joi.string().email().min(10).max(100).optional().messages(mensagens.email),

    // Validando Data de Nascimento
    data_nascimento: Joi.string()
        .pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/) // Formato dd/MM/yyyy
        .required()
        .messages(mensagens.data_nascimento),

    // Validando Gênero
    genero: Joi.string().valid('Masculino', 'Feminino', 'Outro').required().messages(mensagens.genero),

    // Validando Profissão
    profissao: Joi.string().min(3).max(100).optional().messages(mensagens.profissao),
});

module.exports = migranteEsquema;
