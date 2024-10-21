import { Router } from 'express';
import institutionController from '../controllers/institutionController.js';
import validateOrganization from '../middlewares/validation/validateInstitution.js';

const router = Router();

router.get('/institutions', institutionController.findAll);
router.get('/institutions/:id', institutionController.findById);
router.post('/institutions', validateOrganization, institutionController.create);

export default router;