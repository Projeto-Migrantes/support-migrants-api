import { Router } from 'express';
import fetchAddressByCEP from '../controllers/addressController.js';
import validateAddress from '../middlewares/validation/validateAddress.js'

const router = Router();

router.get("/cep/:cep", validateAddress.validateCEP, fetchAddressByCEP);

export default router;
