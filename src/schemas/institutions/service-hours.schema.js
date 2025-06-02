import Joi from 'joi';

const messages = {
  service_hours_pt: {
    'string.base': 'service_hours_pt must be a string',
    'string.empty': 'service_hours_pt cannot be empty',
    'string.min': 'service_hours_pt must be at least {#limit} characters',
    'string.max': 'service_hours_pt must be at most {#limit} characters',
    'any.required': 'service_hours_pt is required',
  },
  service_hours_en: {
    'string.base': 'service_hours_en must be a string',
    'string.empty': 'service_hours_en cannot be empty',
    'string.min': 'service_hours_en must be at least {#limit} characters',
    'string.max': 'service_hours_en must be at most {#limit} characters',
    'any.required': 'service_hours_en is required',
  },
  service_hours_es: {
    'string.base': 'service_hours_es must be a string',
    'string.empty': 'service_hours_es cannot be empty',
    'string.min': 'service_hours_es must be at least {#limit} characters',
    'string.max': 'service_hours_es must be at most {#limit} characters',
    'any.required': 'service_hours_es is required',
  },
  service_hours_fr: {
    'string.base': 'service_hours_fr must be a string',
    'string.empty': 'service_hours_fr cannot be empty',
    'string.min': 'service_hours_fr must be at least {#limit} characters',
    'string.max': 'service_hours_fr must be at most {#limit} characters',
    'any.required': 'service_hours_fr is required',
  },
};

const serviceHoursSchema = Joi.object({
  service_hours_pt: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.service_hours_pt),
  service_hours_en: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.service_hours_en),
  service_hours_es: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.service_hours_es),
  service_hours_fr: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.service_hours_fr),
});

export default serviceHoursSchema;
