import jwt from "jsonwebtoken";
import User from "../models/User.js";
import hashPasswordUtil from "../utils/hashPasswordUtil.js";

const loginService = async (username, password) => {
    try {
        let user;
        if (username === 'admin') {
            user = await User.scope('withPassword').findOne({ where: { role: 'admin' } });
        } else {
            user = await User.scope('withPassword').findOne({ where: { email: username } });
        }
        if (!user || !await hashPasswordUtil.compareHash(password, user.password)) {
            throw new Error('Credenciais inválidas');
        }

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role 
        }, process.env.JWT_SECRET, { expiresIn: '24h' });

        return token; 
    } catch (error) {
        throw new Error(error.message || 'Erro no servidor.');
    }
};

export default {
    loginService,

};