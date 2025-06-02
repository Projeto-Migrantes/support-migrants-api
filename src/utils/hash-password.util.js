import bcrypt from 'bcrypt';

export const createHash = async (password) => {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error(error);
    throw new Error('Error generating password hash');
  }
};

export const compareHash = async (password, passwordUser) => {
  try {
    const isPasswordValid = await bcrypt.compare(password, passwordUser);
    return isPasswordValid;
  } catch (error) {
    console.error(error);
    throw new Error('Error comparing passwords');
  }
};
