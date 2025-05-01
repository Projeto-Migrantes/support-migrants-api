import { Router } from 'express';
import userController from '../controllers/userController.js';
import validate from '../middlewares/validation/validateUser.js';

const router = Router();

router.get('/', userController.getUsers);
router.post('/check-email', userController.emailExist);
router.get('/count', userController.countUsers);
router.patch('/change-password/:id', userController.updatePassword);
router.get('/:id', userController.getUser);
router.post('/', validate, userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
