import { Router } from "express";
import migrantController from "../controllers/migrantController.js";
import validateMigrant from "../middlewares/validation/validateMigrant.js";
import authenticationMigrant from "../middlewares/auth/authenticationMigrant.js";

const router = Router();

// Routes Migrant
router.post('/migrants/check-email', migrantController.emailExist);
router.get("/migrants/profile", authenticationMigrant.authenticateToken, migrantController.getProfile);
router.post("/migrants/auth/verify", authenticationMigrant.authenticateToken, migrantController.exist);


router.patch("/migrants/change-password/:id", migrantController.updatePassword);

router.get('/migrants/search', migrantController.searchMigrants);
router.get("/migrants", migrantController.findAll);
router.get("/migrants/:id", migrantController.findById);

router.post("/migrants", validateMigrant, migrantController.create);

router.put("/migrants/:id", migrantController.update);

router.delete("/migrants/:id", migrantController.destroy);



export default router;