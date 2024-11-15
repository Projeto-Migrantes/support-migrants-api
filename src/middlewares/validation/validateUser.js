import userSchema from "../../schemas/userSchema.js";

/*
* Function that validates the user
*/
const validate = (req, res, next) => {
    const { error, value } = userSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorsDetails = error.details.map(detail => detail.message);
        return res.status(400).json({ errors: errorsDetails });
    };

    next();
};

export default validate;