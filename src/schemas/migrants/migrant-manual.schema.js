import Joi from 'joi';

const messages = {
  name: {
    'string.base': 'name must be text.',
    'string.empty': 'name cannot be empty.',
    'string.min': 'name must have at least {#limit} characters.',
    'string.max': 'name must have at most {#limit} characters.',
    'any.required': 'name is required.',
  },
  description: {
    'string.base': 'description must be text.',
    'string.empty': 'description cannot be empty.',
    'string.max': 'description must have at most {#limit} characters.',
  },
  url: {
    'string.base': 'url must be text.',
    'string.empty': 'url cannot be empty.',
    'any.required': 'url is required.',
  },
  language: {
    'string.base': 'language must be text.',
    'string.empty': 'language cannot be empty.',
    'any.required': 'language is required.',
    'any.only': 'language must be one of the following: en, es, fr, pt.',
  },
};

export const createMigrantManual = Joi.object({
  name: Joi.string().min(1).max(255).required().messages(messages.name),
  description: Joi.string().max(255).optional().messages(messages.description),
  url: Joi.string().min(1).max(255).required().messages(messages.url),
  language: Joi.string()
    .valid('en', 'es', 'fr', 'pt')
    .required()
    .messages(messages.language),
});

export const updateMigrantManual = Joi.object({
  name: Joi.string().min(1).max(255).optional().messages(messages.name),
  description: Joi.string().max(255).optional().messages(messages.description),
  url: Joi.string().min(1).max(255).optional().messages(messages.url),
  language: Joi.string()
    .valid('en', 'es', 'fr', 'pt')
    .optional()
    .messages(messages.language),
});
