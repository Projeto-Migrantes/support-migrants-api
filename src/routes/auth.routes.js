import { Router } from 'express';
import { loginMigrant } from '../middlewares/auth/migrant.auth.js';
import { loginAdmin } from '../middlewares/auth/admin.auth.js';

const router = Router();

router.post('/migrants/login', loginMigrant);
router.post('/admins/login', loginAdmin);

export default router;
