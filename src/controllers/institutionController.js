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
                institutionDescriptions, 
                requirementRestriction, 
                responsibleUser,
                serviceCost,
                serviceHours,
                servicesOffered,
                targetPopulation,    
            } = req.body;

        const addressId = await addressController.existAddress(req, res);
        const createdInstitution = await institutionService.createOrganization(institution, addressId);
        
        const id = createdInstitution.id;

        const createdInstitutionDescriptions = await institutionDescriptionsService.createInstitutionDescriptions(institutionDescriptions, id);
        const createdRequirementRestriction = await requirementRestrictionService.createRequirementRestriction(requirementRestriction, id);
        const createdResponsibleUser = await responsibleUserService.createResponsibleUser(responsibleUser, id);
        const createdServiceCost = await serviceCostService.createServiceCost(serviceCost, id);
        const createdServiceHours = await serviceHoursService.createServiceHours(serviceHours, id);
        const createdServicesOffered = await servicesOfferedService.createServicesOffered(servicesOffered, id);
        const createdTargetPopulation = await targetPopulationService.createTargetPopulation(targetPopulation, id);

        return res.status(201).json({ message: 'Instituição criada com sucesso', createdInstitution });
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