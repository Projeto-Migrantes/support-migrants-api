import Joi from 'joi';
import { validate } from 'cnpj';

// Function to remove CNPJ formatting
const removeCNPJFormatting = (cnpj) => cnpj.replace(/[^\d]/g, '');

// Standard error messages
const messages = {
    companyName: {
        'string.base': "Razão Social deve ser um texto",
        'string.empty': "Razão Social não pode estar vazio",
        'string.min': "Razão Social deve ter no mínimo {#limit} caracteres",
        'string.max': "Razão Social deve ter no máximo {#limit} caracteres",
        'any.required': "Razão Social é obrigatório",
    },
    tradeName: {
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
    mainPhone: {
        'string.pattern.base': "O telefone principal deve ser um número válido.",
        'any.required': "O telefone principal é necessário.",
        'string.empty': "O telefone principal não pode estar vazio."
    },
    secondaryPhone: {
        'string.pattern.base': "O telefone secundário deve ser um número válido.",
        'string.empty': "O telefone secundário não pode estar vazio se fornecido."
    },
    email: {
        'string.email': "O e-mail deve ser válido.",
        'any.required': "O e-mail é obrigatório.",
        'string.empty': "O e-mail não pode estar vazio."
    },
    instagram: {
        'string.pattern.base': "O usuário do Instagram deve ser um nome de usuário válido (sem espaços e caracteres especiais)."
    },
    numberAddress: {
        'any.required': "O número do endereço é obrigatório.",
        'number.base': "O número do endereço deve ser um número válido."
    },
    site: {
        'string.uri': "O site deve ser uma URL válida."
    },
    description: {
        'string.min': "A descrição deve ter no mínimo {#limit} caracteres.",
        'string.max': "A descrição deve ter no máximo {#limit} caracteres.",
        'any.required': "A descrição é obrigatória.",
        'string.empty': "A descrição não pode estar vazia."
    }
};

// Validation scheme
const organizationSchema = Joi.object({

    // Validating company name
    companyName: Joi.string().min(3).max(200).required().messages(messages.companyName),
    
    // Validating trade name
    tradeName: Joi.string().min(3).max(150).required().messages(messages.tradeName),

    // Validating CNPJ
    cnpj: Joi.string().custom((value, helpers) => {
        const cnpjUnformatted = removeCNPJFormatting(value);
        if (!validate(cnpjUnformatted)) {
            return helpers.error('any.invalid');
        }
        return cnpjUnformatted;
    }).required().messages(messages.cnpj),

    // Validating main phone
    mainPhone: Joi.string().pattern(/^\(\d{2}\) \d{5}-\d{4}$/).required().messages(messages.mainPhone),

    // Validating optional Phone
    secondaryPhone: Joi.string().pattern(/^\(\d{2}\) \d{5}-\d{4}$/).optional().messages(messages.secondaryPhone),

    // Validating email
    email: Joi.string().email().min(10).max(100).required().messages(messages.email),

    // Validating instagram
    instagram: Joi.string().optional().pattern(/^@?[a-zA-Z0-9_]{1,30}$/).messages(messages.instagram),

    // Validating address complement
    addressComplement: Joi.string().min(15).max(150).optional(),

    // Validating address number
    numberAddress: Joi.string().min(1).max(10).required().messages(messages.numberAddress),

    // Validating site
    site: Joi.string().optional().uri().messages(messages.site),

    // // Validating description (Portuguese, French, English and Spanish)
    descriptionPt: Joi.string().min(20).max(255).required().messages({ ...messages.descricao, 'string.empty': "A descrição em português não pode estar vazia." }),
    descriptionFr: Joi.string().min(20).max(255).required().messages({ ...messages.descricao, 'string.empty': "A descrição em francês não pode estar vazia." }),
    descriptionEn: Joi.string().min(20).max(255).required().messages({ ...messages.descricao, 'string.empty': "A descrição em inglês não pode estar vazia." }),
    descriptionEs: Joi.string().min(20).max(255).required().messages({ ...messages.descricao, 'string.empty': "A descrição em espanhol não pode estar vazia." }),
});

export default organizationSchema;
