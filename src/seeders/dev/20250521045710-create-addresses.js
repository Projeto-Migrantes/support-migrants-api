import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM addresses`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn('There are already 5 or more addresses. No entries were made.');
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('addresses', [
    {
      postal_code: '40000-001',
      street: 'Rua A',
      neighborhood: 'Bairro A',
      city: 'Salvador',
      state: 'BA',
      created_at: now,
      updated_at: now,
    },
    {
      postal_code: '40000-002',
      street: 'Rua B',
      neighborhood: 'Bairro B',
      city: 'Salvador',
      state: 'BA',
      created_at: now,
      updated_at: now,
    },
    {
      postal_code: '40000-003',
      street: 'Rua C',
      neighborhood: 'Bairro C',
      city: 'Salvador',
      state: 'BA',
      created_at: now,
      updated_at: now,
    },
    {
      postal_code: '40000-004',
      street: 'Rua D',
      neighborhood: 'Bairro D',
      city: 'Salvador',
      state: 'BA',
      created_at: now,
      updated_at: now,
    },
    {
      postal_code: '40000-005',
      street: 'Rua E',
      neighborhood: 'Bairro E',
      city: 'Salvador',
      state: 'BA',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('addresses', null, {});
};
