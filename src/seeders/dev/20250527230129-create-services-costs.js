import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM services_costs`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more service costs. No entries have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('services_costs', [
    {
      institution_id: 1,
      services_costs_pt: 'Gratuito',
      services_costs_en: 'Free of charge',
      services_costs_es: 'Gratuito',
      services_costs_fr: 'Gratuit',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 2,
      services_costs_pt: 'Gratuito',
      services_costs_en: 'Free',
      services_costs_es: 'Gratuito',
      services_costs_fr: 'Gratuit',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 3,
      services_costs_pt: 'Contribuição voluntária',
      services_costs_en: 'Voluntary contribution',
      services_costs_es: 'Contribución voluntaria',
      services_costs_fr: 'Contribution volontaire',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 4,
      services_costs_pt: 'Mensalidade acessível',
      services_costs_en: 'Affordable monthly fee',
      services_costs_es: 'Cuota mensual accesible',
      services_costs_fr: 'Frais mensuels abordables',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 5,
      services_costs_pt: 'Gratuito',
      services_costs_en: 'Free',
      services_costs_es: 'Gratuito',
      services_costs_fr: 'Gratuit',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('services_costs', null, {});
};
