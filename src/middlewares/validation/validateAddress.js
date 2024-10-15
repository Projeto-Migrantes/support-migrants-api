const validateCEP = (req, res, next) => {
    
    const cepRegex = /^\d{5}-?\d{3}$/;
    if (!req.params.cep && !cepRegex.test(req.params.cep)) {
        return res.status(400).json({ erro:'CEP inválido'});
    }

    next();
};

export default {
    validateCEP
};