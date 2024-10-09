const { rateLimit } = require('express-rate-limit')

const limitador = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutos
    max: 100, //limite de 100 requisições por IP
    message: 'Você fez muitas requisições, por favor, tente novamente mais tarde.',
});

module.exports = limitador;