import UserService from "../services/UserService.js";
import hashPasswordUtil from "../utils/hashPasswordUtil.js";

const createUser = async (req, res) => {
    const user = req.body;
    try {
        user.password = await hashPasswordUtil.createHash(user.password);
        const newUser = await UserService.createUserService(user);
        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const getUsers = async (req, res) => {
    try {
        const users = await UserService.findAllUsersService();
        res.status(200).json({ users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserService.findUserByIdService(id);
        res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    };
};

const updateUser = async (req, res) => {
    const  userId  = req.params.id;
    const  newData  = req.body;
    try {
        const [updatedLines] = await UserService.updateUser(userId, newData);
        if (updatedLines === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await UserService.deleteUser(id);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const updatePassword = async (req, res) => {
    const { id } = req.params;
    const password = req.body.password;
    try {
        await UserService.updatePasswordUser(password, id);
        res.status(200).json({ message: 'Senha atualizada com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao mudar a senha' });
    };
};

export default {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    updatePassword,
};