import { Router } from 'express';
import migrantController from '../controllers/migrant.controller.js';
import { validateID } from '../middlewares/validation/validateID.js';
import validateRequest from '../middlewares/validation/validateRequest.js';
import {
  createMigrantMainSchema,
  updateMigrantMainSchema,
} from '../schemas/migrants/migrant-main.schema.js';
import { verifyRole } from '../middlewares/auth/role.auth.js';
import { verifyAdmin } from '../middlewares/auth/admin.auth.js';

const router = Router();

router.get('/profile/:id', verifyRole, migrantController.profile);
router.post('/check-email', verifyAdmin, migrantController.emailExist);
router.get('/count', verifyAdmin, migrantController.count);

export default router;
