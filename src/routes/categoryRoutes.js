import { Router } from "express";
import categoryController from "../controllers/categoryController.js";

const router = Router();

// Route that fetches all categories
router.get('/categories', categoryController.findAll);

export default router;