import RequirementRestriction from '../models/RequirementRestriction.js';
import requirementRestrictionRepository from '../repositories/requirement-restriction.repository.js';

class RequirementRestrictionService {
  async findAll() {
    return await requirementRestrictionRepository.findAll();
  }
}

export default new RequirementRestrictionService();
