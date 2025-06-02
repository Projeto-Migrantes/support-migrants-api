import Joi from 'joi';

const messages = {
  services_costs_pt: {
    'string.base': 'services_costs_pt must be a string',
    'string.empty': 'services_costs_pt cannot be empty',
    'string.min': 'services_costs_pt must be at least {#limit} characters',
    'string.max': 'services_costs_pt must be at most {#limit} characters',
    'any.required': 'services_costs_pt is required',
  },
  services_costs_en: {
    'string.base': 'services_costs_en must be a string',
    'string.empty': 'services_costs_en cannot be empty',
    'string.min': 'services_costs_en must be at least {#limit} characters',
    'string.max': 'services_costs_en must be at most {#limit} characters',
    'any.required': 'services_costs_en is required',
  },
  services_costs_es: {
    'string.base': 'services_costs_es must be a string',
    'string.empty': 'services_costs_es cannot be empty',
    'string.min': 'services_costs_es must be at least {#limit} characters',
    'string.max': 'services_costs_es must be at most {#limit} characters',
    'any.required': 'services_costs_es is required',
  },
  services_costs_fr: {
    'string.base': 'services_costs_fr must be a string',
    'string.empty': 'services_costs_fr cannot be empty',
    'string.min': 'services_costs_fr must be at least {#limit} characters',
    'string.max': 'services_costs_fr must be at most {#limit} characters',
    'any.required': 'services_costs_fr is required',
  },
};

const serviceCostSchema = Joi.object({
  services_costs_pt: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.services_costs_pt),
  services_costs_en: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.services_costs_en),
  services_costs_es: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.services_costs_es),
  services_costs_fr: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.services_costs_fr),
});

export default serviceCostSchema;
