import { Router } from "express";
import loginMigrant from "../middlewares/auth/authenticationMigrant.js";

const router = Router();

router.post('/migrant/login', loginMigrant.login);

export default router;