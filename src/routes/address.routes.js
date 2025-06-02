import { Router } from 'express';
import addressController from '../controllers/address.controller.js';
import { verifyRole } from '../middlewares/auth/role.auth.js';

const router = Router();

router.get('/:postal_code', verifyRole, addressController.findByPostalCode);

export default router;
