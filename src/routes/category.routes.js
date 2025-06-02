import { Router } from 'express';
import categoryController from '../controllers/category.controller.js';
import { verifyRole } from '../middlewares/auth/role.auth.js';

const router = Router();

router.get('/', verifyRole, categoryController.findAll);

export default router;
