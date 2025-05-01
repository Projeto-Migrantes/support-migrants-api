import { Router } from 'express';
import migrantController from '../controllers/migrantController.js';
import validateMigrant from '../middlewares/validation/validateMigrant.js';
import authenticationMigrant from '../middlewares/auth/authenticationMigrant.js';

const router = Router();

router.post('/check-email', migrantController.emailExist);
router.get(
  '/profile',
  authenticationMigrant.authenticateToken,
  migrantController.getProfile,
);
router.post(
  '/auth/verify',
  authenticationMigrant.authenticateToken,
  migrantController.exist,
);
router.get('/count', migrantController.count);
router.patch('/change-password/:id', migrantController.updatePassword);
router.get('/search', migrantController.searchMigrants);
router.get('/', migrantController.findAll);
router.get('/:id', migrantController.findById);
router.post('/', validateMigrant, migrantController.create);
router.put('/:id', migrantController.update);
router.delete('/:id', migrantController.destroy);

export default router;
