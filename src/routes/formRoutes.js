import { Router } from 'express';
import formController from '../controllers/formController.js';
import validateForm from '../middlewares/validation/validateForm.js';

const router = Router();

// Routes for forms
router.get('/forms', formController.findAll);
router.get('/forms-count/unread', formController.countUnread);
router.get("/forms/status/:status", formController.findyByStatus);
router.put('/forms/:id', formController.update);
router.get('/forms/:id', formController.findById);
router.delete('/forms/:id', formController.destroy);
router.post('/forms', validateForm,formController.create);

export default router;