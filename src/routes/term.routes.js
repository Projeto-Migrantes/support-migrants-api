import { Router } from 'express';
import termController from '../controllers/termController.js';

const router = Router();

router.post('/', termController.createTerm);
router.get('/', termController.getTerms);
router.get('/:type', termController.getTerm);
router.put('/', termController.updateTerm);
router.delete('/:type', termController.deleteTerm);

export default router;
