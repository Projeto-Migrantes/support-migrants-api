import { Router } from 'express';
import formController from '../controllers/formController.js';
import validateForm from '../middlewares/validation/validateForm.js';
import authenticationMigrant from '../middlewares/auth/authenticationMigrant.js';


const router = Router();

router.get('/forms', formController.findAll);
router.get("/forms/status/:status", formController.findyByStatus);
router.put('/forms/:id', formController.update);
router.get('/forms/:id', formController.findById);
router.delete('/forms/:id', formController.destroy);
router.post('/forms', validateForm,formController.create);

export default router;