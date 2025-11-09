import Joi from 'joi';

export const createMigrantSchema = Joi.object({
  full_name: Joi.string().min(3).max(255).required().messages({
    'string.base': 'full_name must be a string',
    'string.empty': 'full_name is required',
    'string.min': 'full_name must be at least {#limit} characters long',
    'string.max': 'full_name cannot exceed {#limit} characters',
    'any.required': 'full_name is required',
  }),

  email: Joi.string().email().required().messages({
    'string.base': 'email must be a string',
    'string.email': 'email must be a valid email address',
    'string.empty': 'email is required',
    'any.required': 'email is required',
  }),

  date_of_birth: Joi.date().max('now').required().messages({
    'date.base': 'date_of_birth must be a valid date',
    'date.max': 'date_of_birth cannot be in the future',
    'any.required': 'date_of_birth is required',
  }),

  phone_number: Joi.string(),
  crnm: Joi.string().length(9),

  password: Joi.string().min(8).required().messages({
    'string.base': 'password must be a string',
    'string.min': 'password must be at least {#limit} characters long',
    'string.empty': 'password is required',
    'any.required': 'password is required',
  }),

  consent: Joi.boolean().valid(true).optional().messages({
    'boolean.base': 'consent must be a boolean',
    'any.only': 'consent must be true',
    'any.required': 'consent is required',
  }),

  purpose: Joi.string().optional().messages({
    'string.base': 'purpose must be a string',
    'string.empty': 'purpose is required',
    'any.required': 'purpose is required',
  }),

  address_complement: Joi.string().allow(null, ''),
  address_number: Joi.string().allow(null, ''),
  social_name: Joi.string().allow(null, ''),
  language_preference: Joi.string().allow(null, ''),
  entry_into_brazil: Joi.date().allow(null),
  migration_reason: Joi.string().allow(null, ''),
  country_of_origin: Joi.string().allow(null, ''),
  gender: Joi.string().allow(null, ''),
  marital_status: Joi.string().allow(null, ''),
  literacy_level: Joi.string().allow(null, ''),
});

export const updateMigrantSchema = Joi.object({
  full_name: Joi.string().min(3).max(255),
  email: Joi.string().email(),
  date_of_birth: Joi.date().max('now'),
  phone_number: Joi.string(),
  crnm: Joi.string().length(9),
  consent: Joi.boolean(),
  purpose: Joi.string(),
  address_complement: Joi.string().allow(null, ''),
  address_number: Joi.string().allow(null, ''),
  social_name: Joi.string().allow(null, ''),
  language_preference: Joi.string().allow(null, ''),
  entry_into_brazil: Joi.date().allow(null),
  migration_reason: Joi.string().allow(null, ''),
  country_of_origin: Joi.string().allow(null, ''),
  gender: Joi.string().allow(null, ''),
  marital_status: Joi.string().allow(null, ''),
  literacy_level: Joi.string().allow(null, ''),
});

export const updatePasswordSchema = Joi.object({
  password: Joi.string().min(8).required().messages({
    'string.base': 'password must be a string',
    'string.min': 'password must be at least {#limit} characters long',
    'string.empty': 'password is required',
    'any.required': 'password is required',
  }),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'password must match',
      'any.required': 'password confirmation is required',
    }),
});

export const emailCheckSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'email must be a string',
    'string.email': 'email must be a valid email address',
    'string.empty': 'email is required',
    'any.required': 'email is required',
  }),
});
