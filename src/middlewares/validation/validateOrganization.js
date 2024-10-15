import organizationSchema from '../../schemas/organizationSchema.js';

const validate = (req, res, next) => {
    const { error, value } = organizationSchema.validate(req.body, { abortEarly: false });

    if(error){
        const errorsDetails = error.details.map(detail => detail.message);
        return res.status(400).json( {errors: errorsDetails} );
    }

    // Removes formatting from phones 
    req.body.main_phone = req.body.main_phone.replace(/[^\d]/g, ''); 

    if (req.body.secondary_phone) {
        req.body.secondary_phone = req.body.secondary_phone.replace(/[^\d]/g, '');
    }
    
    // Removes CNPJ formatting 
    req.body.cnpj = req.body.cnpj.replace(/[^\d]/g, '');
    next();
};

export default validate;