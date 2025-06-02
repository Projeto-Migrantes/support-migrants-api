import express from 'express';
import migrantManualController from '../controllers/migrant-manual.controller.js';
import { validateID } from '../middlewares/validation/validateID.js';
import validateRequest from '../middlewares/validation/validateRequest.js';
import {
  createMigrantManual,
  updateMigrantManual,
} from '../schemas/migrants/migrant-manual.schema.js';
import { verifyAdmin } from '../middlewares/auth/admin.auth.js';
import { verifyRole } from '../middlewares/auth/role.auth.js';

const router = express.Router();

router.post(
  '/',
  verifyAdmin,
  validateRequest(createMigrantManual),
  migrantManualController.create,
);

export default router;
