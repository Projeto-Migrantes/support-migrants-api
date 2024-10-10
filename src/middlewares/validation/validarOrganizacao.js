const Joi = require('joi');
const validate = require('cnpj');
const { parsePhoneNumberFromString } = require('libphonenumber-js');

// Função para remover formatação do CNPJ
const removerFormatacaoCNPJ = (cnpj) => cnpj.replace(/[^\d]/g, '');

// Mensagens de erro padrão
const mensagens = {
    razaoSocial: {
        'string.base': "Razão Social deve ser um texto",
        'string.empty': "Razão Social não pode estar vazio",
        'string.min': "Razão Social deve ter no mínimo {#limit} caracteres",
        'string.max': "Razão Social deve ter no máximo {#limit} caracteres",
        'any.required': "Razão Social é obrigatório",
    },
    nomeFantasia: {
        'string.base': "Nome fantasia deve ser um texto",
        'string.empty': "Nome fantasia não pode estar vazio",
        'string.min': "Nome fantasia deve ter no mínimo {#limit} caracteres",
        'string.max': "Nome fantasia deve ter no máximo {#limit} caracteres",
        'any.required': "Nome fantasia é obrigatório",
    },
    cnpj: {
        'any.invalid': "CNPJ inválido.",
        'string.empty': "CNPJ não pode estar vazio.",
        'any.required': "CNPJ é obrigatório.",
    },
    telefonePrincipal: {
        'string.min': "O telefone principal deve ter pelo menos {#limit} dígitos.",
        'any.required': "O telefone principal é necessário.",
        'string.empty': "O telefone principal não pode estar vazio."
    },
    telefoneSecundario: {
        'string.min': "O telefone secundário deve ter pelo menos {#limit} dígitos.",
        'string.empty': "O telefone secundário não pode estar vazio se fornecido."
    },
    email: {
        'string.email': "O e-mail deve ser válido.",
        'any.required': "O e-mail é obrigatório.",
        'string.empty': "O e-mail não pode estar vazio."
    },
    usuarioInstagram: {
        'string.pattern.base': "O usuário do Instagram deve ser um nome de usuário válido (sem espaços e caracteres especiais)."
    },
    numeroEndereco: {
        'any.required': "O número do endereço é obrigatório.",
        'number.base': "O número do endereço deve ser um número válido."
    },
    site: {
        'string.uri': "O site deve ser uma URL válida."
    },
    descricao: {
        'string.min': "A descrição deve ter no mínimo {#limit} caracteres.",
        'string.max': "A descrição deve ter no máximo {#limit} caracteres.",
        'any.required': "A descrição é obrigatória.",
        'string.empty': "A descrição não pode estar vazia."
    }
};

// Esquema de validação
const organizacaoEsquema = Joi.object({

    //Validando Razão Social
    razaoSocial: Joi.string().min(3).max(200).required().messages(mensagens.razaoSocial),
    
    // Validando Nome fantasia
    nomeFantasia: Joi.string().min(3).max(150).required().messages(mensagens.nomeFantasia),

    // Validando CNPJ
    cnpj: Joi.string().custom((value, helpers) => {
        const cnpjSemFormatacao = removerFormatacaoCNPJ(value);
        if (!validate(cnpjSemFormatacao)) {
            return helpers.error('any.invalid');
        }
        return cnpjSemFormatacao;
    }).required().messages(mensagens.cnpj),

    // Validando Telefone principal
    telefonePrincipal: Joi.string().custom((value, helpers) => {
        const numeroTelefone = parsePhoneNumberFromString(value, 'BR');

        if (!numeroTelefone || !numeroTelefone.isValid()) {
            return helpers.error('any.invalid'); 
        }

        return numeroTelefone.number; 
    }).required().messages(mensagens.telefonePrincipal),

    // Validando Telefone opcional
    telefoneSecundario: Joi.string().custom((value, helpers) => {
        if (value) {
            const numeroTelefone = parsePhoneNumberFromString(value, 'BR');

            if (!numeroTelefone || !numeroTelefone.isValid()) {
                return helpers.error('any.invalid'); 
            }

            return numeroTelefone.number; 
        }
        return value;
    }).messages(mensagens.telefoneSecundario),

    // Validando Email
    email: Joi.string().email().min(10).max(100).required().messages(mensagens.email),

    // Validando Instagram
    usuarioInstagram: Joi.string().optional().pattern(/^@?[a-zA-Z0-9_]{1,30}$/).messages(mensagens.usuarioInstagram),

    // Validando Complemento
    complemento: Joi.string().min(15).max(150).optional(),

    // Validando Número do Endereço
    numeroEndereco: Joi.string().min(1).max(10).required().messages(mensagens.numeroEndereco),

    // Validando Site
    site: Joi.string().optional().uri().messages(mensagens.site),

    // Validando Descrição (Português, Francês, Inglês e Espanhol)
    descricaoPt: Joi.string().min(20).max(255).required().messages({ ...mensagens.descricao, 'string.empty': "A descrição em português não pode estar vazia." }),
    descricaoFr: Joi.string().min(20).max(255).required().messages({ ...mensagens.descricao, 'string.empty': "A descrição em francês não pode estar vazia." }),
    descricaoEn: Joi.string().min(20).max(255).required().messages({ ...mensagens.descricao, 'string.empty': "A descrição em inglês não pode estar vazia." }),
    descricaoEs: Joi.string().min(20).max(255).required().messages({ ...mensagens.descricao, 'string.empty': "A descrição em espanhol não pode estar vazia." }),
});

module.exports = organizacaoEsquema;
