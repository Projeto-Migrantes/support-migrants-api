import addressController from './addressController.js';

import institutionService from '../services/institutionService.js';
import institutionDescriptionsService from '../services/institutionDescriptionsService.js';
import requirementRestrictionService from '../services/requirementRestrictionService.js';
import responsibleUserService from '../services/responsibleUserService.js';
import serviceCostService from '../services/serviceCostService.js';
import serviceHoursService from '../services/serviceHoursService.js';
import servicesOfferedService from '../services/servicesOfferedService.js';
import targetPopulationService from '../services/targetPopulationService.js';

const findAll = async (req, res) => {
    try {
        const institutions = await institutionService.findAllInstitutions();
        if(!institutions || institutions.length === 0){
            return res.status(404).json({message: 'Nenhuma instituição encontrada'});
        }
        return res.status(200).json({ institutions });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    }
};

const findById = async (req, res) => {
    try {
      const institution = await institutionService.findInstitutionById(req.params.id);
      if(!institution || institution.length === 0){
        return res.status(404).json({message: 'Nenhuma instituição encontrada'})
    }  
    return res.status(200).json({ institution });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' })        
    }
};

const create = async (req, res) => {
    try {
        const { institution, 
                institution_descriptions, 
                requirements_restrictions, 
                responsible_user,
                service_cost,
                service_hours,
                services_offered,
                target_population,    
            } = req.body;

        const addressId = await addressController.existAddress(req, res);
        const createdResponsibleUser = await responsibleUserService.createResponsibleUser(responsible_user);
        const responsibleUserId = createdResponsibleUser.id;

        const createdInstitution = await institutionService.createInstitution(institution, addressId, responsibleUserId);
        const institutionId = createdInstitution.id;

        const createdInstitutionDescriptions = await institutionDescriptionsService.createInstitutionDescriptions(institution_descriptions, institutionId);
        const createdRequirementRestriction = await requirementRestrictionService.createRequirementRestriction(requirements_restrictions, institutionId);
        const createdServiceCost = await serviceCostService.createServiceCost(service_cost, institutionId);
        const createdServiceHours = await serviceHoursService.createServiceHours(service_hours, institutionId);
        const createdServicesOffered = await servicesOfferedService.createServicesOffered(services_offered, institutionId);
        const createdTargetPopulation = await targetPopulationService.createTargetPopulation(target_population, institutionId);

        return res.status(201).json({
             message: 'Instituição criada com sucesso', 
             createdInstitution,
             createdInstitutionDescriptions,
             createdRequirementRestriction,
             createdResponsibleUser,
             createdServiceCost,
             createdServiceHours,
             createdServicesOffered,
             createdTargetPopulation
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json( {error: 'Erro interno do servidor '} );
    }
}

export default { 
    findAll,
    findById,
    create,
};