import RequirementRestriction from '../models/RequirementRestriction.js';

class RequirementRestrictionRepository {
  async findAll() {
    return await RequirementRestriction.findAll();
  }
}

export default new RequirementRestrictionRepository();
