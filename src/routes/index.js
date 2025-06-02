import { Router } from 'express';
import addressRoutes from './address.routes.js';
import institutionRoutes from './institution.routes.js';
import categoryRoutes from './category.routes.js';
import migrantRoutes from './migrant.routes.js';
import authRoutes from './auth.routes.js';
import formRoutes from './form.routes.js';
import migrantManualRoutes from './migrant-manual.routes.js';
import termRoutes from './term.routes.js';
import adminRoutes from './admin.routes.js';

const router = Router();

router.use('/addresses', addressRoutes);
router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);
router.use('/forms', formRoutes);
router.use('/institutions', institutionRoutes);
router.use('/migrants', migrantRoutes);
router.use('/migrant-manuals', migrantManualRoutes);
router.use('/terms', termRoutes);
router.use('/admins', adminRoutes);

export default router;
