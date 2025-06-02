import Joi from 'joi';

const messages = {
  institution_description_pt: {
    'string.base': 'institution_description_pt must be a string',
    'string.empty': 'institution_description_pt cannot be empty',
    'string.min':
      'institution_description_pt must be at least {#limit} characters',
    'string.max':
      'institution_description_pt must be at most {#limit} characters',
    'any.required': 'institution_description_pt is required',
  },
  institution_description_en: {
    'string.base': 'institution_description_en must be a string',
    'string.empty': 'institution_description_en cannot be empty',
    'string.min':
      'institution_description_en must be at least {#limit} characters',
    'string.max':
      'institution_description_en must be at most {#limit} characters',
    'any.required': 'institution_description_en is required',
  },
  institution_description_es: {
    'string.base': 'institution_description_es must be a string',
    'string.empty': 'institution_description_es cannot be empty',
    'string.min':
      'institution_description_es must be at least {#limit} characters',
    'string.max':
      'institution_description_es must be at most {#limit} characters',
    'any.required': 'institution_description_es is required',
  },
  institution_description_fr: {
    'string.base': 'institution_description_fr must be a string',
    'string.empty': 'institution_description_fr cannot be empty',
    'string.min':
      'institution_description_fr must be at least {#limit} characters',
    'string.max':
      'institution_description_fr must be at most {#limit} characters',
    'any.required': 'institution_description_fr is required',
  },
};

const institutionDescriptionSchema = Joi.object({
  institution_description_pt: Joi.string()
    .min(3)
    .max(1000)
    .required()
    .messages(messages.institution_description_pt),
  institution_description_en: Joi.string()
    .min(3)
    .max(1000)
    .required()
    .messages(messages.institution_description_en),
  institution_description_es: Joi.string()
    .min(3)
    .max(1000)
    .required()
    .messages(messages.institution_description_es),
  institution_description_fr: Joi.string()
    .min(3)
    .max(1000)
    .required()
    .messages(messages.institution_description_fr),
});

export default institutionDescriptionSchema;
