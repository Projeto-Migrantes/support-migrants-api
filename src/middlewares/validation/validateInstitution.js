import institutionMainSchema from "../../schemas/institutionMainSchema.js";

const validate = (req, res, next) => {
    const { error, value } = institutionMainSchema.validate(req.body, { abortEarly: false });

    if(error){
        const errorsDetails = error.details.map(detail => detail.message);
        return res.status(400).json( {errors: errorsDetails} );
    }

    // Removes CNPJ formatting 
    req.body.institution.cnpj = req.body.institution.cnpj.replace(/[^\d]/g, '');
    next();
};

export default validate;