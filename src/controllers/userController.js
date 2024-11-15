import UserService from "../services/userService.js";
import hashPasswordUtil from "../utils/hashPasswordUtil.js";

/*
* Function that creates a new user using the provided data
*/
const createUser = async (req, res) => {
    try {
        const user = req.body;
        user.password = await hashPasswordUtil.createHash(user.password);
        const newUser = await UserService.createUserService(user);

        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that fetches all users from the database
*/
const getUsers = async (req, res) => {
    try {
        const users = await UserService.findAllUsersService();

        if (!users || users.length === 0) {
            return res.status(200).json({ message: 'Nenhum usuário encontrado' });
        };

        res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that fetches a user from the database
*/
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserService.findUserByIdService(id);

        if (!user) {
            return res.status(200).json({ message: 'Usuário não encontrado' });
        };
        
        res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that updates a user using the provided data
*/
const updateUser = async (req, res) => {
    try {
        const  userId  = req.params.id;
        const  newData  = req.body;
        const [updatedLines] = await UserService.updateUser(userId, newData);
        
        if (updatedLines === 0) {
            return res.status(200).json({ message: 'Usuário não encontrado' });
        };

        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that deletes a user by its ID
*/
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.deleteUser(id);

        if (!result) {
            return res.status(200).json({ message: 'Usuário não encontrado' });
        };

        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that updates a user's password by its ID
*/
const updatePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const password = req.body.password;
        const updated = await UserService.updatePasswordUser(password, id);

        if (!updated) {
            return res.status(200).json({ message: 'Usuário não encontrado' });
        };

        res.status(200).json({ message: 'Senha atualizada com sucesso' });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

/*
* Function that counts the number of users in the database
*/
const countUsers = async (req, res) => {
    try {
        const count = await UserService.countUsers();

        return res.status(200).json({ count });
    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });       
    };
};

/*
* Function that checks if an email already exists in the database
*/
const emailExist = async (req, res) => {
    try {
        const { email } = req.body;
        const emailExist = await UserService.findUserByEmailService(email);

        if (emailExist) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        };

    } catch (error) {
        return res.status(500).json({ error: 'Erro no servidor.' });
    };
};

export default {
    createUser, getUsers, getUser,
    updateUser, deleteUser, updatePassword,
    countUsers, emailExist
};