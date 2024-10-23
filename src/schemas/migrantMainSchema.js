import Joi from "joi";
import addressSchema from "./addressSchema.js";
import migrantSchema from "./migrantSchema.js";
import migrantDocumentSchema from './migrantDocumentSchema.js';

// Main validation schema combining all sub-schemas
const mainSchema = Joi.object({
    migrant: migrantSchema.required().messages({ 'any.required': "Os dados do migrante são obrigatórios." }),
    address: addressSchema.required().messages({ 'any.required': "Os dados do endereço são obrigatórios." }),
    migrant_document: migrantDocumentSchema.required().messages({ 'any.required': "Os dados do documento do migrante são obrigatórios." }),
});

// Export the main schema
export default mainSchema;
