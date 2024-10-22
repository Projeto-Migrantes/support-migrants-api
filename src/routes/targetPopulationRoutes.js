import { Router } from "express";
import targetPopulationController from "../controllers/targetPopulationController.js";

const router = Router();

router.get("/targetpopulation", targetPopulationController.findAll);
router.post("/targetpopulation", targetPopulationController.create);

export default router;