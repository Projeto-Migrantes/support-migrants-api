import { Router } from 'express';
import formController from '../controllers/formController.js';
import validateForm from '../middlewares/validation/validateForm.js';

const router = Router();

router.get('/', formController.findAll);
router.get('/count/unread', formController.countUnread);
router.get('/status/:status', formController.findyByStatus);
router.put('/:id', formController.update);
router.get('/:id', formController.findById);
router.delete('/id', formController.destroy);
router.post('/', validateForm, formController.create);

export default router;
