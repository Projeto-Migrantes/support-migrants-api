import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import adminService from '../../services/userService.js';

dotenv.config();

/*
* Function that logs in an user using the provided data
*/
const login = async (req, res) => {
    try {
        const { username, password } = req.body; 
        const token = await adminService.loginService(username, password);
        
        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({ message: 'Login realizado com sucesso' });
    } catch (error) {
        return res.status(401).json({ message: error.message });
    };
};

/*
* Function that authenticates a token
*/
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(400).json({ message: 'Token não fornecido' });
    };

    jwt.verify(token, process.env.JWT_SECRET, (error, admin) => {
        if (error) {
            return res.status(401).json({ message: 'Token inválido ou expirado' });
        };

        req.admin = admin;
        next();
    });
};

export default {
    login, authenticateToken,
};
