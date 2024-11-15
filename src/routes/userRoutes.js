import { Router } from 'express';
import userController from '../controllers/userController.js';
import validate from '../middlewares/validation/validateUser.js';

const router = Router();

// Routes for users
router.get('/users', userController.getUsers);
router.post('/users/check-email', userController.emailExist);
router.get('/users-count', userController.countUsers);
router.patch('/users/change-password/:id', userController.updatePassword);
router.get('/users/:id', userController.getUser);
router.post('/users', validate, userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;

