import { createHash, compareHash } from '../../utils/hash-password.util.js';

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
    }
  }
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('admins', { email: ADM_EMAIL });
};
