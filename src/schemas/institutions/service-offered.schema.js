import Joi from 'joi';

const messages = {
  services_offered_pt: {
    'string.base': 'services_offered_pt must be a string',
    'string.empty': 'services_offered_pt cannot be empty',
    'string.min': 'services_offered_pt must be at least {#limit} characters',
    'string.max': 'services_offered_pt must be at most {#limit} characters',
    'any.required': 'services_offered_pt is required',
  },
  services_offered_en: {
    'string.base': 'services_offered_en must be a string',
    'string.empty': 'services_offered_en cannot be empty',
    'string.min': 'services_offered_en must be at least {#limit} characters',
    'string.max': 'services_offered_en must be at most {#limit} characters',
    'any.required': 'services_offered_en is required',
  },
  services_offered_es: {
    'string.base': 'services_offered_es must be a string',
    'string.empty': 'services_offered_es cannot be empty',
    'string.min': 'services_offered_es must be at least {#limit} characters',
    'string.max': 'services_offered_es must be at most {#limit} characters',
    'any.required': 'services_offered_es is required',
  },
  services_offered_fr: {
    'string.base': 'services_offered_fr must be a string',
    'string.empty': 'services_offered_fr cannot be empty',
    'string.min': 'services_offered_fr must be at least {#limit} characters',
    'string.max': 'services_offered_fr must be at most {#limit} characters',
    'any.required': 'services_offered_fr is required',
  },
};

const serviceOfferedSchema = Joi.object({
  services_offered_pt: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.services_offered_pt),
  services_offered_en: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.services_offered_en),
  services_offered_es: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.services_offered_es),
  services_offered_fr: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.services_offered_fr),
});

export default serviceOfferedSchema;
