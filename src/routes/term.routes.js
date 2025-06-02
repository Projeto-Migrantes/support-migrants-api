import { Router } from 'express';
import termController from '../controllers/term.controller.js';
import { verifyAdmin } from '../middlewares/auth/admin.auth.js';

const router = Router();

router.post('/', verifyAdmin, termController.create);
router.get('/', verifyAdmin, termController.findAll);
router.get('/:type', verifyAdmin, termController.findByType);
router.put('/:type', verifyAdmin, termController.update);
router.delete('/:type', verifyAdmin, termController.delete);

export default router;
