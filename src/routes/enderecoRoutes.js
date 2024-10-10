const express = require('express');
const enderecoController = require('../controllers/enderecoController');

const router = express.Router();

router.get("/:cep", enderecoController.buscarEnderecoPorCEP);

module.exports = router;
