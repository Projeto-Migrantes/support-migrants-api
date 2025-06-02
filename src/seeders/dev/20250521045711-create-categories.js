import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM categories`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more categories. No entries have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('categories', [
    {
      category_pt: 'Educação',
      category_fr: 'Éducation',
      category_es: 'Educación',
      category_en: 'Education',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Cultura',
      category_fr: 'Culture',
      category_es: 'Cultura',
      category_en: 'Culture',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Saúde',
      category_fr: 'Santé',
      category_es: 'Salud',
      category_en: 'Health',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Emprego',
      category_fr: 'Emploi',
      category_es: 'Empleo',
      category_en: 'Employment',
      created_at: now,
      updated_at: now,
    },
    {
      category_pt: 'Direitos Humanos',
      category_fr: "Droits de l'Homme",
      category_es: 'Derechos Humanos',
      category_en: 'Human Rights',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('categories', null, {});
};
