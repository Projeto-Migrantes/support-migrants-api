import institutionDescriptionsService from '../services/institution-descriptions.service.js';
import institutionRepository from '../repositories/institution.repository.js';
import addressService from './address.service.js';
import serviceCostService from './service-cost.service.js';
import serviceHoursService from './service-hours.service.js';
import requirementRestrictionService from './requirement-restriction.service.js';
import servicesOfferedService from './services-offered.service.js';
import targetPopulationService from './target-population.service.js';
import sequelize from '../config/database.config.js';

class InstitutionService {
  async findAll() {
    return await institutionRepository.findAll();
  }

  async count() {
    return await institutionRepository.count();
  }

  async findById(id) {
    const institution = await institutionRepository.findById(id);
    if (!institution) {
      throw new Error('institutions not found');
    }
    return institution;
  }
}

export default new InstitutionService();
