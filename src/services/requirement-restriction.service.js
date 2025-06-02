import RequirementRestriction from '../models/RequirementRestriction.js';
import requirementRestrictionRepository from '../repositories/requirement-restriction.repository.js';

class RequirementRestrictionService {
  async findAll() {
    return await requirementRestrictionRepository.findAll();
  }

  async create(data, instituionId, transaction) {
    return await requirementRestrictionRepository.create(
      data,
      instituionId,
      transaction,
    );
  }

  async update(data, id, transaction) {
    return await requirementRestrictionRepository.update(data, id, transaction);
  }
}

export default new RequirementRestrictionService();
