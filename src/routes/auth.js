import { Router } from "express";
import authenticationMigrant from "../middlewares/auth/authenticationMigrant.js";
import authenticationAdmin from "../middlewares/auth/authenticationAdmin.js";

const router = Router();

router.post('/migrant/login', authenticationMigrant.login);
router.post('/admin/login', authenticationAdmin.login);

export default router;