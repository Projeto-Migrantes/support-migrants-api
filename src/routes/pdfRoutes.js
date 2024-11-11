import express from 'express';
import pdfController from '../controllers/pdfController.js';
import validate from '../middlewares/validation/validatePdf.js';

const router = express.Router();

router.post('/pdfs', validate, pdfController.createPdf);
router.get('/pdfs', pdfController.findAll);
router.put('/pdfs/:id', validate, pdfController.update);
router.get('/pdfs/:language', pdfController.findByLanguage);
router.delete('/pdfs/:id', pdfController.destroy);

export default router;
