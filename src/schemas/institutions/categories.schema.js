import Joi from 'joi';

const messages = {
  category_pt: {
    'string.base': 'category_pt must be a text.',
    'string.empty': 'category_pt is required.',
    'string.min': 'category_pt must be at least {#limit} characters long.',
    'string.max': 'category_pt must be at most {#limit} characters long.',
    'any.required': 'category_pt is a required field.',
  },
  category_en: {
    'string.base': 'category_en must be a text.',
    'string.empty': 'category_en is required.',
    'string.min': 'category_en must be at least {#limit} characters long.',
    'string.max': 'category_en must be at most {#limit} characters long.',
    'any.required': 'category_en is a required field.',
  },
  category_es: {
    'string.base': 'category_es must be a text.',
    'string.empty': 'category_es is required.',
    'string.min': 'category_es must be at least {#limit} characters long.',
    'string.max': 'category_es must be at most {#limit} characters long.',
    'any.required': 'category_es is a required field.',
  },
  category_fr: {
    'string.base': 'category_fr must be a text.',
    'string.empty': 'category_fr is required.',
    'string.min': 'category_fr must be at least {#limit} characters long.',
    'string.max': 'category_fr must be at most {#limit} characters long.',
    'any.required': 'category_fr is a required field.',
  },
};

const categoriesSchema = Joi.object({
  category_pt: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages(messages.category_pt),
  category_en: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages(messages.category_en),
  category_es: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages(messages.category_es),
  category_fr: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages(messages.category_fr),
});

export default categoriesSchema;
