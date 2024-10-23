import { Router } from "express";
import migrantController from "../controllers/migrantController.js";
import validateMigrant from "../middlewares/validation/validateMigrant.js";

const router = Router();

router.get("/migrants", migrantController.findAll);
router.get("/migrants/:id", migrantController.findById);
router.post("/migrants", validateMigrant, migrantController.create);

export default router;