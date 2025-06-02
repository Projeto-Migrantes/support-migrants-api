import Joi from 'joi';

const messages = {
  target_populations_pt: {
    'string.base': 'target_populations_pt in portuguese must be a string',
    'string.empty': 'target_populations_pt cannot be empty',
    'string.min': 'target_populations_pt must be at least {#limit} characters',
    'string.max': 'target_populations_pt must be at most {#limit} characters',
    'any.required': 'target_populations_pt is required',
  },
  target_populations_en: {
    'string.base': 'target_populations_en must be a string',
    'string.empty': 'target_populations_en cannot be empty',
    'string.min': 'target_populations_en must be at least {#limit} characters',
    'string.max': 'target_populations_en must be at most {#limit} characters',
    'any.required': 'target_populations_en is required',
  },
  target_populations_es: {
    'string.base': 'target_populations_es must be a string',
    'string.empty': 'target_populations_es cannot be empty',
    'string.min': 'target_populations_es must be at least {#limit} characters',
    'string.max': 'target_populations_es must be at most {#limit} characters',
    'any.required': 'target_populations_es is required',
  },
  target_populations_fr: {
    'string.base': 'target_populations_fr must be a string',
    'string.empty': 'target_populations_fr cannot be empty',
    'string.min': 'target_populations_fr must be at least {#limit} characters',
    'string.max': 'target_populations_fr must be at most {#limit} characters',
    'any.required': 'target_populations_fr is required',
  },
};

const targetPopulationSchema = Joi.object({
  target_populations_pt: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.target_populations_pt),
  target_populations_en: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.target_populations_en),
  target_populations_es: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.target_populations_es),
  target_populations_fr: Joi.string()
    .min(3)
    .max(500)
    .required()
    .messages(messages.target_populations_fr),
});

export default targetPopulationSchema;
