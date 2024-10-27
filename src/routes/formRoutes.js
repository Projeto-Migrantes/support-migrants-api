import { Router } from 'express';
import formController from '../controllers/formController.js';
import validateForm from '../middlewares/validation/validateForm.js';
import authenticationMigrant from '../middlewares/auth/authenticationMigrant.js';


const router = Router();

router.get('/forms', formController.findAll);
router.get('/forms/:id', formController.findById);
router.post('/forms', validateForm, authenticationMigrant.authenticateToken, formController.create);
router.delete('/forms/:id', formController.destroy);

export default router;