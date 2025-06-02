import Joi from 'joi';

const messages = {
  name: {
    'string.base': 'name must be a string',
    'string.empty': 'name cannot be empty',
    'string.min': 'name must be at least {#limit} characters',
    'string.max': 'name must be at most {#limit} characters',
    'any.required': 'name is required',
  },
  cnpj: {
    'string.pattern.base': 'the provided cnpj is invalid',
    'string.empty': 'cnpj field cannot be empty',
    'any.required': 'cnpj is required',
  },
  email: {
    'string.email': 'email must be valid',
    'string.empty': 'email cannot be empty',
    'string.max': 'email must be at most {#limit} characters',
    'any.required': 'email is required',
  },
  main_phone: {
    'string.pattern.base': 'main_phone must be a valid number',
    'string.empty': 'main_phone cannot be empty',
    'string.max': 'main_phone must be at most {#limit} characters',
    'any.required': 'main_phone is required',
  },
  secondary_phone: {
    'string.pattern.base': 'secondary_phone must be a valid number',
    'string.max': 'secondary_phone must be at most {#limit} characters',
  },
  address_complement: {
    'string.base': 'address_complement must be a string',
    'string.max': 'address_complement must be at most {#limit} characters',
  },
  address_number: {
    'string.base': 'address_number must be a string',
    'string.empty': 'address_number cannot be empty',
    'string.max': 'address_number must be at most {#limit} characters',
    'any.required': 'address_number is required',
  },
  website: {
    'string.max': 'website URL must be at most {#limit} characters',
  },
  consent: {
    'boolean.base': 'consent must be a boolean value (true or false)',
    'any.required': 'consent is required',
  },
  purpose: {
    'string.base': 'purpose must be a string',
    'string.empty': 'purpose cannot be empty',
    'string.max': 'purpose must be at most {#limit} characters',
    'any.required': 'purpose is required',
  },
  instagram: {
    'string.pattern.base': 'instagram username must be a valid username',
    'string.max': 'instagram username must be at most {#limit} characters',
  },
  link_maps: {
    'string.base': 'link_maps link must be a string',
    'string.max': 'link_maps link must be at most {#limit} characters',
  },
  responsible_user_name: {
    'string.base': 'responsible_user_name must be a string',
    'string.empty': 'responsible_user_name cannot be empty',
    'string.max': 'responsible_user_name must be at most {#limit} characters',
    'any.required': 'responsible_user_name is required',
  },
  responsible_user_position: {
    'string.base': 'responsible_user_position must be a string',
    'string.empty': 'responsible_user_position cannot be empty',
    'string.max':
      'responsible_user_position must be at most {#limit} characters',
    'any.required': 'responsible_user_position is required',
  },
  responsible_user_sector: {
    'string.base': 'responsible_user_sector must be a string',
    'string.empty': 'responsible_user_sector cannot be empty',
    'string.max': 'responsible_user_sector must be at most {#limit} characters',
    'any.required': 'responsible_user_sector is required',
  },
  responsible_user_role: {
    'string.base': 'responsible_user_role must be a string',
    'string.empty': 'responsible_user_role cannot be empty',
    'string.max': 'responsible_user_role must be at most {#limit} characters',
    'any.required': 'responsible_user_role is required',
  },
  registration_date: {
    'date.base': 'registration_date must be a valid date',
    'any.required': 'registration_date is required',
  },
  address_id: {
    'number.base': 'address_id must be a number',
    'number.min': 'address_id must be at least {#limit}',
  },
  category_id: {
    'number.base': 'category_id must be a number',
    'number.min': 'category_id must be at least {#limit}',
  },
};

const institutionSchema = Joi.object({
  name: Joi.string().min(2).max(255).required().messages(messages.name),
  cnpj: Joi.string()
    .pattern(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/)
    .required()
    .messages(messages.cnpj),
  email: Joi.string().email().max(255).required().messages(messages.email),
  main_phone: Joi.string()
    .pattern(/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/)
    .max(15)
    .required()
    .messages(messages.main_phone),
  secondary_phone: Joi.string()
    .pattern(/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/)
    .max(15)
    .optional()
    .allow(null)
    .messages(messages.secondary_phone),
  address_complement: Joi.string()
    .max(50)
    .optional()
    .allow(null)
    .messages(messages.address_complement),
  address_number: Joi.string()
    .max(10)
    .required()
    .messages(messages.address_number),
  website: Joi.string()
    .max(255)
    .optional()
    .allow(null)
    .messages(messages.website),
  consent: Joi.boolean().required().messages(messages.consent),
  purpose: Joi.string().max(255).required().messages(messages.purpose),
  instagram: Joi.string()
    .pattern(/^@[a-zA-Z0-9._]{2,50}$/)
    .max(50)
    .optional()
    .allow(null)
    .messages(messages.instagram),
  link_maps: Joi.string()
    .max(255)
    .optional()
    .allow(null)
    .messages(messages.link_maps),
  responsible_user_name: Joi.string()
    .max(255)
    .required()
    .messages(messages.responsible_user_name),
  responsible_user_position: Joi.string()
    .max(50)
    .required()
    .messages(messages.responsible_user_position),
  responsible_user_sector: Joi.string()
    .max(50)
    .required()
    .messages(messages.responsible_user_sector),
  responsible_user_role: Joi.string()
    .max(50)
    .required()
    .messages(messages.responsible_user_role),
  registration_data: Joi.date().required().messages(messages.registration_data),
  address_id: Joi.number()
    .min(1)
    .optional()
    .allow(null)
    .messages(messages.address_id),
  category_id: Joi.number()
    .min(1)
    .optional()
    .allow(null)
    .messages(messages.category_id),
});

export default institutionSchema;
