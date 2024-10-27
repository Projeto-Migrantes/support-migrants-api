import pdfSchema from "../../schemas/pdfSchema.js";

const validate = (req, res, next) => {
    const { error, value} = pdfSchema.validate(req.body, { abortEarly: false });

    if(error){
        const errosDetails = error.details.map(detail => detail.message);
        return res.status(400).json( {erros: errosDetails} );
    }

    next();
};

export default validate;