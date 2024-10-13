import organizationSchema from '../../schemas/organizationSchema.js';

const validate = (req, res, next) => {
    const { error, value } = organizationSchema.validate(req.body, { abortEarly: false });

    if(error){
        const errorsDetails = error.details.map(detail => detail.message);
        return res.status(400).json( {errors: errorsDetails} );
    }

    // Removes formatting from phones 
    req.body.mainPhone = req.body.mainPhone.replace(/[^\d]/g, ''); 

    if (req.body.secondaryPhone) {
        req.body.secondaryPhone = req.body.secondaryPhone.replace(/[^\d]/g, '');
    }
    
    // Removes CNPJ formatting 
    req.body.cnpj = req.body.cnpj.replace(/[^\d]/g, '');
    next();
};

export default validate;