import { Router } from 'express';
import serviceStationController from '../controllers/serviceStationController.js';
import validateServiceStation from '../middlewares/validation/validateServiceStation.js';

const router = Router();

// Routes for service stations
router.get('/service-stations', serviceStationController.findAll);
router.get('/service-stations/:id', serviceStationController.findById);
router.post('/service-stations', validateServiceStation, serviceStationController.create);
router.delete('/service-stations/:id', serviceStationController.destroy);


export default router;