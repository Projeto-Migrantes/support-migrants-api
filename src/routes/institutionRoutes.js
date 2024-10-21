import { Router } from 'express';
import organizationController from '../controllers/institutionController.js';
import validateOrganization from '../middlewares/validation/validateOrganization.js';

const router = Router();

router.get('/institutions', organizationController.findAll);
router.get('/institutions/:id', organizationController.findById);
router.post('/institutions', validateOrganization, organizationController.create);

export default router;