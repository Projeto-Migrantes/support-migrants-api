import { Router } from "express";
import categoryController from "../controllers/categoryController.js";

const router = Router();

router.get('/categories', categoryController.findAll);

export default router;