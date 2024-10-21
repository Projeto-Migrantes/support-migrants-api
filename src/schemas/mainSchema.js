import Joi from "joi";
import addressSchema from "./addressSchema.js";
import institutionSchema from "./institutionSchema.js";
import responsibleUserSchema from "./responsibleUserSchema.js";
import targetPopulationSchema from "./targetPopulationSchema.js";
import institutionDescriptionSchema from "./institutionDescriptionsSchema.js";
import requirementRestrictionSchema from "./requerimentRestrictionSchema.js";
import serviceOfferedSchema from "./serviceOfferedSchema.js";
import serviceCostSchema from "./serviceCostSchema.js";
import serviceHoursSchema from "./serviceHours.js";

// Main validation schema combining all sub-schemas
const mainSchema = Joi.object({
    institution: institutionSchema.required().messages({ 'any.required': "Os dados da organização são obrigatórios." }),
    address: addressSchema.required().messages({ 'any.required': "Os dados do endereço são obrigatórios." }),
    responsible_user: responsibleUserSchema.required().messages({ 'any.required': "Os dados do responsável pelo cadastro são obrigatórios." }),
    target_population: targetPopulationSchema.required().messages({ 'any.required': "Os dados da população-alvo são obrigatórios." }),
    institution_description: institutionDescriptionSchema.required().messages({ 'any.required': "A descrição da instituição é obrigatória." }),
    requirement_restriction: requirementRestrictionSchema.required().messages({ 'any.required': "Os dados de requerimento e restrição são obrigatórios." }),
    service_offered: serviceOfferedSchema.required().messages({ 'any.required': "Os dados do serviço oferecido são obrigatórios." }),
    service_cost: serviceCostSchema.required().messages({ 'any.required': "Os dados do custo do serviço são obrigatórios." }),
    service_hours: serviceHoursSchema.required().messages({ 'any.required': "Os dados das horas de serviço são obrigatórios." })
});

// Export the main schema
export default mainSchema;
