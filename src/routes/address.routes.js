import { Router } from 'express';
import addressController from '../controllers/address.controller.js';

const router = Router();

router.get('/:postal_code', addressController.findByPostalCode);

export default router;
