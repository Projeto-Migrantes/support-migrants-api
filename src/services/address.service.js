import addressRepository from '../repositories/address.repository.js';
import { fetchAddressByPostalCode } from '../utils/fetch-address.util.js';

class AddressService {
  async findByPostalCode(postalCode) {
    return await fetchAddressByPostalCode(postalCode);
  }
}

export default new AddressService();
