import { Router } from 'express';
import addressController from '../controllers/addressController.js';
import validateAddress from '../middlewares/validation/validateAddress.js';

const router = Router();

router.get(
  '/:cep',
  validateAddress.validateCEP,
  addressController.fetchAddressByCEP,
);

export default router;
