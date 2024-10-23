import jwt from 'jsonwebtoken';
import hashPasswordUtil from '../../utils/hashPasswordUtil.js';
import dotenv from 'dotenv';
import migrantService from '../../services/migrantService.js';

dotenv.config();

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const migrant = await migrantService.findOneMigrantByEmail(email);
        
        if(!migrant){
            return res.status(404).json({ message: "Migrante não encontrado" });
        }
        const isPasswordValid = await hashPasswordUtil.compareHash(password, migrant.password);
        if(!isPasswordValid){
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        const token = jwt.sign(
            {id: migrant.id, email: migrant.email }, //Payload
            process.env.JWT_SECRET,
        );

        return res.status(200).json({
            ...migrant,
            token
        });
    } catch (error) {
        console.error('Erro ao fazer login', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export default {
    login
};
