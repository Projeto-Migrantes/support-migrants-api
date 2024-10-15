import Joi from 'joi';
import addressSchema from './addressSchema.js';
import categorySchema from './categorySchema.js';

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
        'string.pattern.base': "O CNPJ fornecido é inválido.",
        'string.empty': "O campo CNPJ não pode estar vazio.",
        'any.required': "O CNPJ é obrigatório e deve ser informado.",

    },
    mainPhone: {
        'string.pattern.base': "O primeiro telefone deve ser um número válido.",
        'any.required': "O primeiro telefone é necessário.",
        'string.empty': "O primeiro telefone não pode estar vazio."
    },
    secondaryPhone: {
        'string.pattern.base': "O segundo telefone deve ser um número válido.",
        'string.empty': "O segundo telefone não pode estar vazio se fornecido."
    },
    email: {
        'string.email': "O e-mail deve ser válido.",
        'any.required': "O e-mail é obrigatório.",
        'string.empty': "O e-mail não pode estar vazio."
    },
    instagram: {
        'string.pattern.base': "O usuário do Instagram deve ser um nome de usuário válido."
    },
    numberAddress: {
        'any.required': "O número do endereço é obrigatório.",
        'number.base': "O número do endereço deve ser um número válido.",
    },
    site: {
        'string.pattern.base': 'A URL deve começar com "www." e ser uma URL válida.',
        'string.empty': 'A URL não pode estar vazia.'
    },
    description: {
        'string.min': "A descrição deve ter no mínimo {#limit} caracteres.",
        'string.max': "A descrição deve ter no máximo {#limit} caracteres.",
        'any.required': "A descrição é obrigatória.",
        'string.empty': "A descrição não pode estar vazia."
    },
    address: {
        'any.required': `Endereço é obrigatório.`
    },
    addressComplement: {
        'string.base': `Complemento do Endereço deve ser um texto.`,
        'string.empty': `Complemento do Endereço não pode estar vazio.`,
        'string.min': `Complemento do Endereço deve ter pelo menos {#limit} caracteres.`,
        'string.max': `Complemento do Endereço deve ter no máximo {#limit} caracteres.`,
        'any.required': `Complemento inválido.`
    },
    category: {
        'any.required': `Cateogoria é obrigatória.`
    },
    link_maps: {
        'string.base': `O link deve ser um texto.`,
        'string.min': `O link deve ter pelo menos {#limit} caracteres.`,
        'string.max': `O link deve ter no máximo {#limit} caracteres.`,
        'any.required': `Link inválido.`
    }
};

// Validation scheme
const organizationSchema = Joi.object({

    // Validating company name
    company_name: Joi.string().min(10).max(200).required().messages(messages.companyName),
    
    // Validating trade name
    trade_name: Joi.string().min(2).max(150).required().messages(messages.tradeName),

    // Validating CNPJ
    cnpj: Joi.string().pattern(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/).required().messages(messages.cnpj),

    // Validating main phone
    main_phone: Joi.string().pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/).required().messages(messages.mainPhone),

    // Validating optional Phone
    secondary_phone: Joi.string().pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/).optional().messages(messages.secondaryPhone),

    // Validating email
    email: Joi.string().email().min(10).max(100).required().messages(messages.email),

    // Validating instagram
    instagram: Joi.string().optional().pattern(/^@?[a-zA-Z0-9_]{1,30}$/).messages(messages.instagram),

    // Validating address complement
    address_complement: Joi.string().min(15).max(150).optional().messages(messages.addressComplement),

    // Validating address number
    number_address: Joi.string().min(1).max(10).optional().messages(messages.numberAddress),

    // Validating site
    site: Joi.string().max(1000).pattern(/^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}.*$/).optional().messages(messages.site),

    // Validating description (Portuguese, French, English and Spanish)
    description_pt: Joi.string().min(20).max(255).required().messages({ ...messages.description, 'string.empty': "A descrição em português não pode estar vazia." }),
    description_fr: Joi.string().min(20).max(255).required().messages({ ...messages.description, 'string.empty': "A descrição em francês não pode estar vazia." }),
    description_en: Joi.string().min(20).max(255).required().messages({ ...messages.description, 'string.empty': "A descrição em inglês não pode estar vazia." }),
    description_es: Joi.string().min(20).max(255).required().messages({ ...messages.description, 'string.empty': "A descrição em espanhol não pode estar vazia." }),

    // Validating link maps
    link_maps: Joi.string().min(5).max(255).optional().messages(messages.link_maps),

    // Validating address
    address_id: Joi.number().min(1).max(255).required().messages(messages.address),

    // Validating category
    category_id: Joi.number().min(1).max(255).required().messages(messages.category)

});

export default organizationSchema;
