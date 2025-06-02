import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM targets_populations`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more target populations. No insertions have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('targets_populations', [
    {
      institution_id: 1,
      target_populations_pt: 'Migrantes e refugiados',
      target_populations_en: 'Migrants and refugees',
      target_populations_es: 'Migrantes y refugiados',
      target_populations_fr: 'Migrants et réfugiés',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 2,
      target_populations_pt: 'Refugiados de países em conflito',
      target_populations_en: 'Refugees from conflict zones',
      target_populations_es: 'Refugiados de zonas de conflicto',
      target_populations_fr: 'Réfugiés de zones de conflit',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 3,
      target_populations_pt: 'Migrantes econômicos',
      target_populations_en: 'Economic migrants',
      target_populations_es: 'Migrantes económicos',
      target_populations_fr: 'Migrants économiques',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 4,
      target_populations_pt: 'Jovens migrantes',
      target_populations_en: 'Young migrants',
      target_populations_es: 'Jóvenes migrantes',
      target_populations_fr: 'Jeunes migrants',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 5,
      target_populations_pt: 'Famílias de migrantes',
      target_populations_en: 'Migrant families',
      target_populations_es: 'Familias de migrantes',
      target_populations_fr: 'Familles de migrants',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('targets_populations', null, {});
};
