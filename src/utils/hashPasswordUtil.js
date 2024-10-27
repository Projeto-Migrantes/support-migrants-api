import bcrypt from 'bcrypt';

// Generates the password hash
const createHash = async (password) => {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao gerar hash da senha");
    }
};

// Compares the password hash with the password sent as a parameter
const compareHash = async (password, passwordMigrant) => {
    try {
        const isPasswordValid = await bcrypt.compare(password, passwordMigrant);
        return isPasswordValid;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao comparar as senhas");
    }
}

export default {
    createHash,
    compareHash
};