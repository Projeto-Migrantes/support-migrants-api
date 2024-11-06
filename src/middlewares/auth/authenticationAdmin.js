import jwt from 'jsonwebtoken';
import hashPasswordUtil from '../../utils/hashPasswordUtil.js';
import dotenv from 'dotenv';
import adminService from '../../services/adminService.js';

dotenv.config();

const login = async (req, res) => {
    const { userName, password } = req.body;
    try {
        const admin = await adminService.findOneAdminByName(userName);

        // Verifica a existência do usuário e a validade da senha
        const isPasswordValid = admin && await hashPasswordUtil.compareHash(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }

        // Define o token com expiração de 24 horas
        const token = jwt.sign(
            { id: admin.id, userName: admin.userName }, // Payload
            process.env.JWT_SECRET,
            { expiresIn: '24h' } // Define a expiração para 24 horas
        );

        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({ message: 'Login realizado com sucesso' });
    } catch (error) {
        console.error('Erro ao fazer login', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(400).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, admin) => {
        if (error) {
            return res.status(401).json({ message: 'Token inválido ou expirado' });
        };

        req.admin = admin;
        next();
    });
};

export default {
    login,
    authenticateToken,
};
