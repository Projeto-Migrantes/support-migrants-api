import { Router } from "express";
import authenticationMigrant from "../middlewares/auth/authenticationMigrant.js";

const router = Router();

router.post('/migrant/login', authenticationMigrant.login);
router.post('/admin/login', /*loginAdmin.login*/);

export default router;