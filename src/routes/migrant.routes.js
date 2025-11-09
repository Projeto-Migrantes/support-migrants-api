import { Router } from 'express';
import migrantController from '../controllers/migrant.controller.js';
import { validateID } from '../middlewares/validation/validateID.js';
import validateRequest from '../middlewares/validation/validateRequest.js';
import { createMigrantMainSchema, updateMigrantMainSchema } from '../schemas/migrants/migrant-main.schema.js';
import { updatePasswordSchema } from '../schemas/migrants/migrant.schema.js';
import { verifyRole } from '../middlewares/auth/role.auth.js';
import { verifyAdmin } from '../middlewares/auth/admin.auth.js';

const router = Router();

router.get('/profile', verifyRole, migrantController.profile);
router.get('/check-email', verifyAdmin, migrantController.emailExist);
router.get('/count', verifyAdmin, migrantController.count);
router.get('/search', verifyAdmin, migrantController.search);
router.get('/', verifyAdmin, migrantController.findAll);
router.get('/:id', validateID, verifyAdmin, migrantController.findById);
router.post(
  '/register',
  validateRequest(createMigrantMainSchema),
  migrantController.create,
);
router.post(
  '/',
  verifyAdmin,
  validateRequest(createMigrantMainSchema),
  migrantController.create,
);

router.patch(
  '/change-password/:id',
  validateID,
  verifyRole,
  migrantController.changePassword,
);

router.patch(
  '/:id',
  validateID,
  validateRequest(updateMigrantMainSchema),
  verifyAdmin,
  migrantController.update,
);
router.delete('/:id', validateID, verifyAdmin, migrantController.delete);

export default router;
