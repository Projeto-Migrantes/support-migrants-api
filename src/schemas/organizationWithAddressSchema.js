import Joi from "joi";
import addressSchema from "./addressSchema.js";
import institutionSchema from "./institutionSchema.js";

const schemaOrganizationWithAddress  = Joi.object({
    organization: institutionSchema.required().messages({ 'any.required': "Os dados da organização são obrigatórios." }),
    address: addressSchema.required().messages({ 'any.required': "Os dados do endereço são obrigatórios." })
  });

  export default schemaOrganizationWithAddress;