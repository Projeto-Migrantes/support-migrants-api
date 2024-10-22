import mainSchema from "../../schemas/mainSchema.js";

const validate = (req, res, next) => {
    const { error, value } = mainSchema.validate(req.body, { abortEarly: false });

    if(error){
        const errorsDetails = error.details.map(detail => detail.message);
        return res.status(400).json( {errors: errorsDetails} );
    }

    // Removes formatting from phones 
    req.body.institution.main_phone = req.body.institution.main_phone.replace(/[^\d]/g, ''); 

    if (req.body.institution.secondary_phone) {
        req.body.institution.secondary_phone = req.body.institution.secondary_phone.replace(/[^\d]/g, '');
    }
    
    // Removes CNPJ formatting 
    req.body.institution.cnpj = req.body.institution.cnpj.replace(/[^\d]/g, '');
    next();
};

export default validate;