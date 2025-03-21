import addressController from './addressController.js';
import institutionService from '../services/institutionService.js';
import institutionDescriptionsService from '../services/institutionDescriptionsService.js';
import requirementRestrictionService from '../services/requirementRestrictionService.js';
import responsibleUserService from '../services/responsibleUserService.js';
import serviceCostService from '../services/serviceCostService.js';
import serviceHoursService from '../services/serviceHoursService.js';
import servicesOfferedService from '../services/servicesOfferedService.js';
import targetPopulationService from '../services/targetPopulationService.js';

/*
* Function that fetches all institutions from the database
*/
const findAll = async (req, res) => {
    try {
        const institutions = await institutionService.findAllInstitutions();

        if(!institutions || institutions.length === 0){
            return res.status(200).json({ message: 'Nenhuma instituição encontrada' });
        };

        return res.status(200).json({ 
            message: "Instituições encontradas com sucesso",
            data: { institutions } 
        });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });        
    };
};

/*
* Function that fetches an institution by its ID
*/
const findById = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({ message: "ID inválido!" });
        };

        if (isNaN(id) || id <= 0) { 
            return res.status(400).json({ message: "O ID deve ser um número válido!" });
        };
        
        const institution = await institutionService.findInstitutionById(id);

        if(!institution || institution.length === 0){
            return res.status(200).json({ message: 'Nenhuma instituição encontrada' });
        }; 

        return res.status(200).json({ 
            message: "Instituição encontrada com sucesso",
            data: { institution } 
        });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });     
    };
};

/*
* Function that fetches all institutions by category
*/
const findByCategory = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return res.status(400).json({ message: "ID inválido ou não numérico!" });
        }
        
        const institutions = (id == 0)
            ? await institutionService.findAllInstitutions() 
            : await institutionService.findAllInstitutionsByCategory(id);


        if(!institutions || institutions.length === 0){
            return res.status(200).json({ message: 'Nenhuma instituição encontrada com essa categoria' });
        };

        return res.status(200).json({ 
            message: "Instituições encontradas com sucesso",
            data:  { institutions }
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro no servidor' });        
    };
};

/*
* Function that fetches all institutions by a search query
*/
const searchInstituions = async (req, res) => {
    try {
        const query = req.query.q; 

        if (!query) {
            return res.status(400).json({ message: 'Query string is required' });
        };

        const institutions = await institutionService.searchInstitutions(query);
        res.json({ 
            message: "Instituições encontradas com sucesso",
            data: { institutions } 
        });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    };
};

/*
* Function that counts all institutions
*/
const count = async (req, res) => {
    try {
        const count = await institutionService.countInstitutions();

        return res.status(200).json({ 
            data: { count } 
        });

    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor' });        
    };
};

/*
* Function that updates an institution by its ID
*/
const update = async (req, res) => {
    try {
        const { institution, ServiceCost, ServicesOffered, RequirementRestriction, 
                TargetPopulation, ServiceHour, InstitutionDescription, ResponsibleUser } = req.body;

        const institutionId = req.params.id;

        const createdAddress = await addressController.existAddress(req, res);
        
        if (!createdAddress) {
            return res.status(200).json({ message: "Endereço não encontrado." });
        };

        await Promise.all([
            serviceCostService.updateServiceCost(ServiceCost, institutionId),
            servicesOfferedService.updateServicesOffered(ServicesOffered, institutionId),
            requirementRestrictionService.updateRequirementRestriction(RequirementRestriction, institutionId),
            targetPopulationService.updateTargetPopulation(TargetPopulation, institutionId),
            serviceHoursService.updateServiceHours(ServiceHour, institutionId),
            institutionDescriptionsService.updateInstitutionDescriptions(InstitutionDescription, institutionId),
        ]);
         
        const responsibleUser = await responsibleUserService.createResponsibleUser(ResponsibleUser);
        const [updatedLines] = await institutionService.updateInstitution(institution, institutionId, createdAddress, responsibleUser.id); 
        
        if (updatedLines === 0) {
            return res.status(200).json({ message: 'Instituição não encontrada' });
        };

        return res.status(200).json({ message: 'Instituição atualizada com sucesso' });

    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor', error });
    };
};

/*
* Function that creates a new institution using the provided data
*/
const create = async (req, res) => {
    try {
        const { institution, institution_descriptions, requirements_restrictions, 
                responsible_user, service_cost, service_hours, services_offered, target_population } = req.body;

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
        
        await institutionService.updateInstitution(institution, addressId, responsibleUserId); 

        return res.status(201).json({
             message: 'Instituição criada com sucesso', 
             institution: createdInstitution,
             institution_descriptions: createdInstitutionDescriptions,
             requirements_restrictions: createdRequirementRestriction,
             responsible_user: createdResponsibleUser,
             service_cost: createdServiceCost,
             service_hours: createdServiceHours,
             services_offered: createdServicesOffered,
             target_population: createdTargetPopulation
            });

    } catch (error) {
        return res.status(500).json( {error: 'Erro interno do servidor ' } );
    };
};

/*
* Function that checks if an email already exists in the database
*/
const emailExist = async (req, res) => {
    try {
        const { email } = req.body;
        const emailExist = await institutionService.findInstitutionByEmail(email);

        if (emailExist) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        };

    } catch (error) {
        return res.status(500).json({ message: "Erro interno no servidor. Tente novamente mais tarde." });
    };
};

/*
* Function that deletes an institution by its ID
*/
const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedInstitution = await institutionService.deleteInstitution(id);

        if(deletedInstitution == 0){
            return res.status(200).json({ message: 'Instituição não encontrada' });
        };

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor' });
    };
};

export default { 
    findAll, findById, create,
    findByCategory, destroy,
    searchInstituions, update,
    count, emailExist,
};