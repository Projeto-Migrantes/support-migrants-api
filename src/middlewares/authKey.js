import dotenv from 'dotenv';
dotenv.config();

/*
* Middleware to validate the static key
*/
const validateStaticKey = (req, res, next) => {
    const key = req.headers['x-private-key'];

    if (key !== process.env.PRIVATE_KEY) {
        return res.status(401).json({ message: 'Erro ao consumir API' });
    };

    next();
};

export default validateStaticKey;