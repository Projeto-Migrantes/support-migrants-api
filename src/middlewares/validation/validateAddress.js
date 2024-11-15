import addressSchema from "../../schemas/addressSchema.js";

/*
* Function that validates the CEP
*/
const validateCEP = (req, res, next) => {
    
    const cepRegex = /^\d{5}-?\d{3}$/;
    
    if (!req.params.cep && !cepRegex.test(req.params.cep)) {
        return res.status(400).json({ erro:'CEP inválido'});
    };

    next();
};

/*
* Function that validates the address
*/
const validate = (req, res, next) => {
    const { error, value} = addressSchema.validate(req.body, { abortEarly: false });

    if(error){
        const errosDetails = error.details.map(detail => detail.message);
        return res.status(400).json( {erros: errosDetails} );
    };

    next();
};

export default {
    validateCEP, validate
};