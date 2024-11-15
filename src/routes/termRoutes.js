import { Router } from 'express';
import termController from '../controllers/termController.js';

const router = Router();

// Routes for terms
router.post('/terms', termController.createTerm);
router.get('/terms', termController.getTerms);
router.get('/terms/:type', termController.getTerm);
router.put('/terms', termController.updateTerm);
router.delete('/terms/:type', termController.deleteTerm);

export default router;
