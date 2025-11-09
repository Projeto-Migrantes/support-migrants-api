import { Router } from "express";
import { verifyAdmin } from "../middlewares/auth/admin.auth.js";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get('/count', verifyAdmin, usersController.count);

export default router;