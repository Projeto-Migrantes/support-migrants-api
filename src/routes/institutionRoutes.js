import { Router } from 'express';
import institutionController from '../controllers/institutionController.js';
import validateOrganization from '../middlewares/validation/validateInstitution.js';

const router = Router();

router.get('/institutions', institutionController.findAll);
router.get('/institutions/search', institutionController.searchInstituions);
router.get('/institutions/:id', institutionController.findById);
router.get('/institutions/category/:id', institutionController.findByCategory);
router.post('/institutions', validateOrganization, institutionController.create);
router.put("/institutions/:id", institutionController.update);
router.delete('/institutions/:id', institutionController.destroy);

export default router;