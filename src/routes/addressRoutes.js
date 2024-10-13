import express from 'express';
import fetchAddressByCEP from '../controllers/addressController.js';

const router = express.Router();

router.get("/cep/:cep", fetchAddressByCEP);

export default router;
