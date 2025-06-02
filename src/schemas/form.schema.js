import Joi from 'joi';

const messages = {
  subject: {
    'string.base': 'subject must be a text.',
    'string.empty': 'subject cannot be empty.',
    'string.min': 'subject must have at least {#limit} characters.',
    'string.max': 'subject must have at most {#limit} characters.',
    'any.required': 'subject is required.',
  },
  message: {
    'string.base': 'message must be a text.',
    'string.empty': 'message cannot be empty.',
    'string.min': 'message must have at least {#limit} characters.',
    'string.max': 'message must have at most {#limit} characters.',
    'any.required': 'message is required.',
  },
  phone: {
    'string.pattern.base': 'phone_number must be valid. ex: (11) 22222-3333',
    'string.empty': 'phone_number cannot be empty.',
    'any.required': 'phone_number is required.',
  },
  name: {
    'string.base': 'full_name must be a text.',
    'string.empty': 'full_name cannot be empty.',
    'string.min': 'full_name must have at least {#limit} characters.',
    'string.max': 'full_name must have at most {#limit} characters.',
    'any.required': 'full_name is required.',
  },
  email: {
    'string.email': 'email must be valid. ex: user@domi.com',
    'any.required': 'email is required.',
    'string.empty': 'email cannot be empty.',
  },
};

const formSchema = Joi.object({
  subject: Joi.string().min(1).max(100).required().messages(messages.subject),
  message: Joi.string().min(1).max(500).required().messages(messages.message),
  phone_number: Joi.string()
    .pattern(/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/)
    .required()
    .messages(messages.phone),
  full_name: Joi.string().min(1).max(255).required().messages(messages.name),
  email: Joi.string().email().max(255).required().messages(messages.email),
});

export default formSchema;
