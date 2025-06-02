import Address from '../models/Address.js';

class AddressRepository {
  async exists(postal_code) {
    return await Address.findOne({ where: { postal_code } });
  }
}

export default new AddressRepository();
