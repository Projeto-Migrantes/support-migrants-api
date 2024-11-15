import jwt from "jsonwebtoken";
import User from "../models/User.js";
import hashPasswordUtil from "../utils/hashPasswordUtil.js";
import { Op } from "sequelize";

/*
* Function that authenticates a user
*/
const loginService = async (username, password) => {
    try {
        let user;

        if (username === 'admin') {
            user = await User.scope('withPassword').findOne({ where: { role: 'admin' } });
        } else {
            user = await User.scope('withPassword').findOne({ where: { email: username } });
        };

        if (!user || !await hashPasswordUtil.compareHash(password, user.password)) {
            throw new Error('Credenciais inválidas');
        };

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

/*
* Function that creates a user
*/
const createUserService = async (user) => {
    return await User.create({...user});
};

/*
* Function that fetches all users from the database
*/
const findAllUsersService = async () => {
    return await User.findAll({
        where: {
            email: {
                [Op.ne]: 'admin' 
            }
        },
        order: [['id', 'DESC']]
    });
};

/*
* Function that fetches a user by its ID
*/
const findUserByIdService = async (id) => {
    return await User.findByPk(id);
};

/*
* Function that updates a user
*/
const updateUser = async (userId, data) => {
    return await User.update({
        ...data
    }, {
        where: {id: userId}
    });
};

/*
* Function that deletes a user by its ID
*/
const deleteUser = async (userId) => {
    return await User.destroy({ where: { id: userId } });
};

/*
* Function that updates a user's password
*/
const updatePasswordUser = async (password, userId) => {
    const hashPassword = await hashPasswordUtil.createHash(password);
    return await User.update({password: hashPassword}, {
        where: {id: userId}
    });
};

/*
* Function that counts all users
*/
const countUsers = async () => {
    return await User.count();
};

/*
* Function that checks if an email already exists
*/
const findUserByEmailService = async (email) => {
    return await User.findOne({
        raw: true, where: { email }
    });
};

export default {
    loginService, createUserService, findAllUsersService,
    findUserByIdService, updateUser, deleteUser,
    updatePasswordUser, countUsers, findUserByEmailService
};
