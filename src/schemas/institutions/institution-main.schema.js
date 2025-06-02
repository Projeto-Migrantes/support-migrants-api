import Joi from 'joi';
import { createAddressSchema } from '../address.schema.js';
import institutionSchema from './institution.schema.js';
import targetPopulationsSchema from './target-populations.schema.js';
import institutionDescriptionSchema from './institution-descriptions.schema.js';
import requirementRestrictionSchema from './requeriment-restriction.schema.js';
import serviceOfferedSchema from './service-offered.schema.js';
import serviceCostSchema from './service-cost.schema.js';
import serviceHoursSchema from './service-hours.schema.js';

const mainSchema = Joi.object({
  institution: institutionSchema
    .required()
    .messages({ 'any.required': 'institution data is required.' }),

  address: createAddressSchema
    .required()
    .messages({ 'any.required': 'address data is required.' }),

  target_populations: targetPopulationsSchema.required().messages({
    'any.required': 'target_populations data is required.',
  }),

  institution_descriptions: institutionDescriptionSchema.required().messages({
    'any.required': 'institution_descriptions is required.',
  }),

  requirements_restrictions: requirementRestrictionSchema.optional().messages({
    'any.required': 'requirements_restrictions data is required.',
  }),

  services_offered: serviceOfferedSchema.required().messages({
    'any.required': 'services_offered data is required.',
  }),

  service_cost: serviceCostSchema.required().messages({
    'any.required': 'service_cost data is required.',
  }),

  service_hours: serviceHoursSchema.required().messages({
    'any.required': 'service_hours data is required.',
  }),
});

export default mainSchema;
