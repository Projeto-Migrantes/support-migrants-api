import { Router } from "express";
import authenticationMigrant from "../middlewares/auth/authenticationMigrant.js";
import authenticationUser from "../middlewares/auth/authenticationUser.js";

const router = Router();

// Routes for authentication
router.post('/migrant/login', authenticationMigrant.login);
router.post('/login', authenticationUser.login);

export default router;