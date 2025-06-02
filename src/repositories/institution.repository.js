import Institution from '../models/Institution.js';
import Category from '../models/Category.js';
import Address from '../models/Address.js';
import InstitutionDescriptions from '../models/InstitutionDescriptions.js';
import ServiceHours from '../models/ServiceHours.js';
import TargetPopulation from '../models/TargetPopulation.js';
import RequirementRestriction from '../models/RequirementRestriction.js';
import ServicesOffered from '../models/ServicesOffered.js';
import ServiceCost from '../models/ServiceCost.js';
import { Sequelize, Op } from 'sequelize';

class InstitutionRepository {
  async findAll() {
    return await Institution.findAll({
      order: [['id', 'DESC']],
      include: models.all,
    });
  }

  async count() {
    return await Institution.count();
  }

  async findById(id) {
    return await Institution.findByPk(id, {
      include: models.all,
    });
  }

  async create(data, transaction) {
    return await Institution.create(data, { transaction });
  }

  async findAllByCategory(categoryId) {
    return await Institution.findAll({
      where: { category_id: categoryId },
      include: models.all,
    });
  }

  async delete(id) {
    return await Institution.destroy({ where: { id } });
  }

  async update(data, id, transaction) {
    return await Institution.update(data, {
      where: { id },
      transaction,
    });
  }

  async search(query) {
    return await Institution.findAll({
      where: {
        [Sequelize.Op.or]: [
          { email: { [Sequelize.Op.iLike]: `%${query}%` } },
          { main_phone: { [Sequelize.Op.iLike]: `%${query}%` } },
          { secondary_phone: { [Sequelize.Op.iLike]: `%${query}%` } },
          { cnpj: { [Sequelize.Op.iLike]: `%${query}%` } },
        ],
      },
    });
  }

  async checkIfDataExists({ cnpj, email, main_phone, secondary_phone }) {
    return await Institution.findOne({
      where: {
        [Op.or]: [{ cnpj }, { email }, { main_phone }, { secondary_phone }],
      },
      raw: true,
    });
  }
}

const models = {
  all: [
    { model: Category, as: 'category' },
    { model: Address, as: 'address' },
    { model: InstitutionDescriptions, as: 'institution_descriptions' },
    { model: ServiceHours, as: 'service_hours' },
    { model: TargetPopulation, as: 'target_populations' },
    { model: RequirementRestriction, as: 'requirement_restriction' },
    { model: ServicesOffered, as: 'services_offered' },
    { model: ServiceCost, as: 'service_cost' },
  ],
};

export default new InstitutionRepository();
