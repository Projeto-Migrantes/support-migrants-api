import { Router } from 'express';
import addressController from '../controllers/addressController.js';
import validateAddress from '../middlewares/validation/validateAddress.js'

const router = Router();

//Route that fetches an address by its CEP
router.get("/cep/:cep", validateAddress.validateCEP, addressController.fetchAddressByCEP);

export default router;
