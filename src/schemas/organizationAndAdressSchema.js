import Joi from "joi";
import addressSchema from "./addressSchema.js";
import organizationSchema from "./organizationSchema.js";

const mainSchema = Joi.object({
    organization: organizationSchema.required().messages({ 'any.required': "Os dados da organização são obrigatórios." }),
    address: addressSchema.required().messages({ 'any.required': "Os dados do endereço são obrigatórios." })
  });

  export default mainSchema;