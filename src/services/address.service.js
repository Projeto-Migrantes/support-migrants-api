import addressRepository from '../repositories/address.repository.js';
import { fetchAddressByPostalCode } from '../utils/fetch-address.util.js';

class AddressService {
  async findByPostalCode(postalCode) {
    return await fetchAddressByPostalCode(postalCode);
  }

  async exists(postalCode, transaction) {
    let address = await addressRepository.exists(postalCode);
    if (!address) {
      address = await this.create(
        await this.findByPostalCode(postalCode, transaction),
      );
    }

    return address;
  }

  async create(data, transaction) {
    return await addressRepository.create(data, { transaction });
  }
}

export default new AddressService();
