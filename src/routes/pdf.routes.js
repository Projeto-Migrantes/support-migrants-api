import express from 'express';
import pdfController from '../controllers/pdfController.js';
import validate from '../middlewares/validation/validatePdf.js';

const router = express.Router();

router.post('/', validate, pdfController.createPdf);
router.get('/', pdfController.findAll);
router.put('/:id', validate, pdfController.update);
router.get('/:language', pdfController.findByLanguage);
router.delete('/:id', pdfController.destroy);

export default router;
