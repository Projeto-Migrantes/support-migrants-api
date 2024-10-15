import { Router } from 'express';
import organizationController from '../controllers/organizationController.js';
import validateOrganization from '../middlewares/validation/validateOrganization.js';

const router = Router();

router.get('/organizations', organizationController.findAll);
router.get('/organizations/:id', organizationController.findById);
router.post('/organizations', validateOrganization, organizationController.create);

export default router;