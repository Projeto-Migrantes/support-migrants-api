import { Router } from 'express';
import adminController from '../controllers/admin.controller.js';
import { verifyAdmin } from '../middlewares/auth/admin.auth.js';
import { validateID } from '../middlewares/validation/validateID.js';
import validateRequest from '../middlewares/validation/validateRequest.js';

const router = Router();

// router.get('/', verifyAdmin, adminController.findAll);

export default router;
