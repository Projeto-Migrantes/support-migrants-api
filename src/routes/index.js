import { Router } from 'express';
import addressRoutes from './address.routes.js';
import institutionRoutes from './institution.routes.js';
import categoryRoutes from './category.routes.js';
import serviceStationRoutes from './service-station.routes.js';
import migrantRoutes from './migrant.routes.js';
import authRoutes from './auth.routes.js';
import formRoutes from './form.routes.js';
import pdfRoutes from './pdf.routes.js';
import userRoutes from './user.routes.js';
import termRoutes from './term.routes.js';

const router = Router();

router.use('/cep', addressRoutes);
router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);
router.use('/forms', formRoutes);
router.use('/institutions', institutionRoutes);
router.use('/migrants', migrantRoutes);
router.use('/pdfs', pdfRoutes);
router.use('/service-stations', serviceStationRoutes);
router.use('/terms', termRoutes);
router.use('/users', userRoutes);

export default router;
