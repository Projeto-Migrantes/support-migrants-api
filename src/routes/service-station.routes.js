import { Router } from 'express';
import serviceStationController from '../controllers/serviceStationController.js';
import validateServiceStation from '../middlewares/validation/validateServiceStation.js';

const router = Router();

router.get('/', serviceStationController.findAll);
router.get('/:id', serviceStationController.findById);
router.post('/', validateServiceStation, serviceStationController.create);
router.delete('/:id', serviceStationController.destroy);

export default router;
