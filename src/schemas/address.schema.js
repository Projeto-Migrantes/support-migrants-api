import Joi from 'joi';

const messages = {
  postal_code: {
    'string.base': 'postal_code must be a string',
    'string.pattern.base': 'postal_code must follow the format 12345-678',
    'any.required': 'postal_code is required',
  },
  city: {
    'string.base': 'city must be a string',
    'string.min': 'city must be at least {#limit} characters',
    'string.max': 'city must be at most {#limit} characters',
    'any.required': 'city is required',
  },
  state: {
    'string.base': 'state must be a string',
    'string.min': 'state must be at least {#limit} characters',
    'string.max': 'state must be at most {#limit} characters',
    'any.required': 'state is required',
  },
  neighborhood: {
    'string.base': 'neighborhood must be a string',
    'string.min': 'neighborhood must be at least {#limit} characters',
    'string.max': 'neighborhood must be at most {#limit} characters',
    'any.required': 'neighborhood is required',
  },
  street: {
    'string.base': 'street must be a string',
    'string.min': 'street must be at least {#limit} characters',
    'string.max': 'street must be at most {#limit} characters',
    'any.required': 'street is required',
  },
};

export const createAddressSchema = Joi.object({
  postal_code: Joi.string()
    .pattern(/^\d{5}-?\d{3}$/)
    .required()
    .messages(messages.postal_code),
  city: Joi.string().min(3).max(150).required().messages(messages.city),
  state: Joi.string().min(2).max(150).required().messages(messages.state),
  neighborhood: Joi.string()
    .min(3)
    .max(300)
    .required()
    .messages(messages.neighborhood),
  street: Joi.string().min(2).max(300).required().messages(messages.street),
});

export const updateAddressSchema = Joi.object({
  postal_code: Joi.string()
    .pattern(/^\d{5}-?\d{3}$/)
    .optional()
    .messages(messages.postal_code),
  city: Joi.string().min(3).max(150).optional().messages(messages.city),
  state: Joi.string().min(2).max(150).optional().messages(messages.state),
  neighborhood: Joi.string()
    .min(3)
    .max(300)
    .optional()
    .messages(messages.neighborhood),
  street: Joi.string().min(2).max(300).optional().messages(messages.street),
});
