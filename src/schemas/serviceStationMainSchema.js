import Joi from "joi";
import addressSchema from "./addressSchema.js";
import serviceStationSchema from "./serviceStationSchema.js";

// Main validation schema combining all sub-schemas
const mainSchema = Joi.object({
    service_station: serviceStationSchema.required().messages({ 'any.required': "Os dados do posto de atendimento são obrigatórios." }),
    address: addressSchema.required().messages({ 'any.required': "Os dados do endereço são obrigatórios." }),
});

// Export the main schema
export default mainSchema;
