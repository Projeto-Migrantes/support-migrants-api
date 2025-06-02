import { Router } from 'express';
import institutionController from '../controllers/institution.controller.js';
import { validateID } from '../middlewares/validation/validateID.js';
import validateRequest from '../middlewares/validation/validateRequest.js';
import mainSchema from '../schemas/institutions/institution-main.schema.js';
import { verifyRole } from '../middlewares/auth/role.auth.js';
import { verifyAdmin } from '../middlewares/auth/admin.auth.js';

const router = Router();

router.get('/', verifyRole, institutionController.findAll);
router.get('/search', verifyAdmin, institutionController.search);
router.get('/count', verifyAdmin, institutionController.count);
router.get('/:id', validateID, verifyRole, institutionController.findById);
router.get(
  '/category/:id',
  validateID,
  verifyRole,
  institutionController.findByCategory,
);
router.post(
  '/',
  verifyAdmin,
  validateRequest(mainSchema),
  institutionController.create,
);
router.patch('/:id', validateID, verifyAdmin, institutionController.update);
router.get('/check-email', verifyAdmin, institutionController.emailExist);

export default router;
