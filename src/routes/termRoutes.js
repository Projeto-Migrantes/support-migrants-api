import { Router } from 'express';
import termController from '../controllers/termController.js';

const router = Router();

// Rota para criar um novo termo
router.post('/terms', termController.createTerm);

// Rota para obter um termo específico por tipo
router.get('/terms/:type', termController.getTerm);

// Rota para atualizar um termo existente
router.put('/terms', termController.updateTerm);

// Rota para deletar um termo
router.delete('/terms/:type', termController.deleteTerm);

export default router;
