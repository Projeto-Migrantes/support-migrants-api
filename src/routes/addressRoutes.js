import { Router } from 'express';
import addressController from '../controllers/addressController.js';
import validateAddress from '../middlewares/validation/validateAddress.js'

const router = Router();

router.get("/cep/:cep", validateAddress.validateCEP, addressController.fetchAddressByCEP);
router.get("/existe/cep", validateAddress.validate, addressController.existAddress);

export default router;
