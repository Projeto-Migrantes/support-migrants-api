import { createHash, compareHash } from '../../utils/hash-password.util.js';
import logger from '../../config/logger.config.js';

const { ADM_NAME, ADM_PASSWORD, ADM_EMAIL, ADM_ROLE } = process.env;

export const up = async (queryInterface, Sequelize) => {
  const [admin] = await queryInterface.sequelize.query(
    'SELECT * FROM admins WHERE email = :email LIMIT 1',
    {
      replacements: { email: ADM_EMAIL },
      type: Sequelize.QueryTypes.SELECT,
    },
  );

  if (!admin) {
    await queryInterface.bulkInsert('admins', [
      {
        name: ADM_NAME,
        email: ADM_EMAIL,
        password: await createHash(ADM_PASSWORD),
        role: ADM_ROLE,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  } else {
    logger.warn('Admin already exist. No entries have been made.');

    const samePassword = await compareHash(ADM_PASSWORD, admin.password);

    if (!samePassword) {
      await queryInterface.bulkUpdate(
        'admins',
        {
          password: await createHash(ADM_PASSWORD),
          updated_at: new Date(),
        },
        { email: ADM_EMAIL },
      );
      logger.warn('The default admin password has been changed');
    }
  }
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('admins', { email: ADM_EMAIL });
};
