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

  async create(data) {
    const t = await sequelize.transaction();
    try {
      await this.checkIfDataExists(data.institution);

      const address = await addressService.exists(data.address.postal_code, t);
      data.institution.address_id = address.id;

      const institution = await institutionRepository.create(
        data.institution,
        t,
      );
      const institution_id = institution.id;

      const institution_descriptions =
        await institutionDescriptionsService.create(
          data.institution_descriptions,
          institution_id,
          t,
        );

      let requirements_restrictions;
      if (data.requirements_restrictions) {
        requirements_restrictions = await requirementRestrictionService.create(
          data.requirements_restrictions,
          institution_id,
          t,
        );
      }

      const service_cost = await serviceCostService.create(
        data.service_cost,
        institution_id,
        t,
      );

      const service_hours = await serviceHoursService.create(
        data.service_hours,
        institution_id,
        t,
      );

      const services_offered = await servicesOfferedService.create(
        data.services_offered,
        institution_id,
        t,
      );

      const target_populations = await targetPopulationService.create(
        data.target_populations,
        institution_id,
        t,
      );

      await t.commit();

      return {
        institution,
        address,
        institution_descriptions,
        requirements_restrictions,
        service_cost,
        service_hours,
        services_offered,
        target_populations,
      };
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  async findAllByCategory(id) {
    const institutions = await institutionRepository.findAllByCategory(id);
    if (!institutions) {
      throw new Error('institutions not found with this category');
    }
    return institutions;
  }

  async delete(id) {
    const institution = await institutionRepository.delete(id);
    if (institution === 0) {
      throw new Error('institution not found');
    }
    return institution;
  }

  async update(data, id) {
    const t = await sequelize.transaction();
    try {
      const institutionExists = await institutionRepository.findById(id);
      if (!institutionExists) {
        throw new Error('institution not found');
      }

      let address = null;
      if (data.address) {
        address = await addressService.exists(data.address.postal_code, t);
        data.institution.address_id = address.id;
      }

      const institution = await institutionRepository.update(
        data.institution,
        id,
        t,
      );

      const institution_descriptions =
        await institutionDescriptionsService.update(
          data.institution_descriptions,
          id,
          t,
        );

      let requirements_restrictions = null;
      if (data.requirements_restrictions) {
        requirements_restrictions = await requirementRestrictionService.update(
          data.requirements_restrictions,
          id,
          t,
        );
      }

      const service_cost = await serviceCostService.update(
        data.service_cost,
        id,
        t,
      );

      const service_hours = await serviceHoursService.update(
        data.service_hours,
        id,
        t,
      );

      const services_offered = await servicesOfferedService.update(
        data.services_offered,
        id,
        t,
      );

      const target_populations = await targetPopulationService.update(
        data.target_populations,
        id,
        t,
      );

      await t.commit();

      return {
        institution,
        address,
        institution_descriptions,
        requirements_restrictions,
        service_cost,
        service_hours,
        services_offered,
        target_populations,
      };
    } catch (error) {
      if (!t.finished) await t.rollback();
      throw error;
    }
  }

  async search(query) {
    const institution = await institutionRepository.search(query);
    if (institution.length === 0) {
      throw new Error('institutions not found');
    }
    return institution;
  }

  async findByEmail(email) {
    return await institutionRepository.findByEmail(email);
  }

  async checkIfDataExists(data) {
    const existingInstitution = await institutionRepository.checkIfDataExists(
      data,
    );

    const { cnpj, email, main_phone, secondary_phone } = data;

    if (existingInstitution) {
      if (existingInstitution.cnpj === cnpj) {
        throw new Error('CNPJ already exists', { cause: 'conflict' });
      }
      if (existingInstitution.email === email) {
        throw new Error('email already exists', { cause: 'conflict' });
      }
      if (existingInstitution.main_phone === main_phone) {
        throw new Error('main phone already exists', { cause: 'conflict' });
      }
      if (existingInstitution.secondary_phone === secondary_phone) {
        throw new Error('secondary phone already exists', {
          cause: 'conflict',
        });
      }
    }
  }
}

export default new InstitutionService();
