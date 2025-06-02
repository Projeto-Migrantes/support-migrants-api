import { Router } from 'express';
import formController from '../controllers/form.controller.js';
import { validateID } from '../middlewares/validation/validateID.js';
import { verifyAdmin } from '../middlewares/auth/admin.auth.js';
import { verifyMigrant } from '../middlewares/auth/migrant.auth.js';
import validateRequest from '../middlewares/validation/validateRequest.js';
import { createFormSchema } from '../schemas/form.schema.js';

const router = Router();

router.get('/', verifyAdmin, formController.findAll);
router.get('/count-unread', verifyAdmin, formController.countPedding);
router.patch('/:id', validateID, verifyAdmin, formController.update);
router.get('/:id', validateID, verifyAdmin, formController.findById);
router.delete('/:id', validateID, verifyAdmin, formController.delete);
router.post(
  '/',
  validateRequest(createFormSchema),
  verifyMigrant,
  formController.create,
);

export default router;
