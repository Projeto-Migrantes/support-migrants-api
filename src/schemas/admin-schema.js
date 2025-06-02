import Joi from 'joi';

const messages = {
  name: {
    'string.base': 'name must be a text.',
    'string.empty': 'name cannot be empty.',
    'string.min': 'name must be at least {#limit} characters long.',
    'string.max': 'name must be at most {#limit} characters long.',
    'any.required': 'name is required.',
  },
  email: {
    'string.base': 'email must be a text.',
    'string.empty': 'email cannot be empty.',
    'string.email': 'email must be a valid email address.',
    'any.required': 'email is required.',
  },
  password: {
    'string.base': 'password must be a text.',
    'string.empty': 'password cannot be empty.',
    'string.min': 'password must be at least {#limit} characters long.',
    'any.required': 'password is required.',
  },
  role: {
    'string.base': 'role must be a text.',
    'string.empty': 'role cannot be empty.',
    'any.required': 'role is required.',
  },
};

const userSchema = Joi.object({
  name: Joi.string().min(1).max(150).required().messages(messages.name),
  email: Joi.string().email().max(100).required().messages(messages.email),
  password: Joi.string().min(1).required().messages(messages.password),
  role: Joi.string().min(1).max(50).required().messages(messages.role),
});

export default userSchema;
