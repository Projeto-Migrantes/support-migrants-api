import RequirementRestriction from '../models/RequirementRestriction.js';

class RequirementRestrictionRepository {
  async findAll() {
    return await RequirementRestriction.findAll();
  }

  async create(data, id, transaction) {
    return await RequirementRestriction.create(
      {
        ...data,
        institution_id: id,
      },
      { transaction },
    );
  }
}

export default new RequirementRestrictionRepository();
