import Joi from 'joi';

const messages = {
  requirements_restrictions_pt: {
    'string.base': 'requirements_restrictions_pt must be a string',
    'string.empty': 'requirements_restrictions_pt cannot be empty',
    'string.min':
      'requirements_restrictions_pt must be at least {#limit} characters',
    'string.max':
      'requirements_restrictions_pt must be at most {#limit} characters',
    'any.required': 'requirements_restrictions_pt is required',
  },
  requirements_restrictions_en: {
    'string.base': 'requirements_restrictions_en must be a string',
    'string.empty': 'requirements_restrictions_en cannot be empty',
    'string.min':
      'requirements_restrictions_en must be at least {#limit} characters',
    'string.max':
      'requirements_restrictions_en must be at most {#limit} characters',
    'any.required': 'requirements_restrictions_en is required',
  },
  requirements_restrictions_es: {
    'string.base': 'requirements_restrictions_es must be a string',
    'string.empty': 'requirements_restrictions_es cannot be empty',
    'string.min':
      'requirements_restrictions_es must be at least {#limit} characters',
    'string.max':
      'requirements_restrictions_es must be at most {#limit} characters',
    'any.required': 'requirements_restrictions_es is required',
  },
  requirements_restrictions_fr: {
    'string.base': 'requirements_restrictions_fr must be a string',
    'string.empty': 'requirements_restrictions_fr cannot be empty',
    'string.min':
      'requirements_restrictions_fr must be at least {#limit} characters',
    'string.max':
      'requirements_restrictions_fr must be at most {#limit} characters',
    'any.required': 'requirements_restrictions_fr is required',
  },
};

const requirementRestrictionSchema = Joi.object({
  requirements_restrictions_pt: Joi.string()
    .min(3)
    .max(500)
    .optional()
    .messages(messages.requirements_restrictions_pt),
  requirements_restrictions_en: Joi.string()
    .min(3)
    .max(500)
    .optional()
    .messages(messages.requirements_restrictions_en),
  requirements_restrictions_es: Joi.string()
    .min(3)
    .max(500)
    .optional()
    .messages(messages.requirements_restrictions_es),
  requirements_restrictions_fr: Joi.string()
    .min(3)
    .max(500)
    .optional()
    .messages(messages.requirements_restrictions_fr),
});

export default requirementRestrictionSchema;
