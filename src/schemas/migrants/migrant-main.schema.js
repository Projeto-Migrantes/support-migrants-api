import Joi from 'joi';
import { createAddressSchema, updateAddressSchema } from '../address.schema.js';
import { createMigrantSchema, updateMigrantSchema } from './migrant.schema.js';

export const createMigrantMainSchema = Joi.object({
  migrant: createMigrantSchema
    .required()
    .messages({ 'any.required': 'migrant data is required' }),
  address: createAddressSchema
    .optional()
    .messages({ 'any.required': 'address data is required' }),
});

export const updateMigrantMainSchema = Joi.object({
  migrant: updateMigrantSchema.optional(),
  address: updateAddressSchema.optional(),
});
