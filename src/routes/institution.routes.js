import { Router } from 'express';
import institutionController from '../controllers/institutionController.js';
import validateOrganization from '../middlewares/validation/validateInstitution.js';

const router = Router();

router.get('/', institutionController.findAll);
router.post('/check-email', institutionController.emailExist);
router.get('/search', institutionController.searchInstituions);
router.get('/count', institutionController.count);
router.get('/:id', institutionController.findById);
router.get('/category/:id', institutionController.findByCategory);
router.post('/', validateOrganization, institutionController.create);
router.put('/:id', institutionController.update);
router.delete('/:id', institutionController.destroy);

export default router;
