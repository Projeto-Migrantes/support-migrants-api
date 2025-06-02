import addressService from '../services/address.service.js';

class AddressController {
  async findByPostalCode(req, res) {
    try {
      const address = await addressService.findByPostalCode(
        req.params.postal_code,
      );
      if (address.erro) {
        return res.status(404).json({ message: 'Invalid Postal Code' });
      }
      return res.status(200).json(address);
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const createdAddress = await addressService.create(req.body);
      return res.status(201).json(createdAddress);
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }

  async exists(req, res) {
    try {
      const cep = req.body.address.cep;
      return await addressService.exists(cep);
    } catch (error) {
      return res.status(500).json({
        message: 'server error',
        error: error.message,
      });
    }
  }
}

export default new AddressController();
