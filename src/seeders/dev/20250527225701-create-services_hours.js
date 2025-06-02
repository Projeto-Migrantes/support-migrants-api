import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM services_hours`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more service schedules. No entries have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('services_hours', [
    {
      institution_id: 1,
      service_hours_pt: 'Segunda a sexta, 8h às 17h',
      service_hours_en: 'Monday to Friday, 8am–5pm',
      service_hours_es: 'Lunes a viernes, 8h a 17h',
      service_hours_fr: 'Lundi au vendredi, 8h à 17h',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 2,
      service_hours_pt: 'Segunda a sábado, 9h às 18h',
      service_hours_en: 'Monday to Saturday, 9am–6pm',
      service_hours_es: 'Lunes a sábado, 9h a 18h',
      service_hours_fr: 'Lundi au samedi, 9h à 18h',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 3,
      service_hours_pt: 'Terça a quinta, 10h às 16h',
      service_hours_en: 'Tuesday to Thursday, 10am–4pm',
      service_hours_es: 'Martes a jueves, 10h a 16h',
      service_hours_fr: 'Mardi au jeudi, 10h à 16h',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 4,
      service_hours_pt: 'Segunda, quarta e sexta, 13h às 19h',
      service_hours_en: 'Mon, Wed, Fri, 1pm–7pm',
      service_hours_es: 'Lun, mié, vie, 13h a 19h',
      service_hours_fr: 'Lun, mer, ven, 13h à 19h',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 5,
      service_hours_pt: 'Terça a sexta, 9h às 15h',
      service_hours_en: 'Tuesday to Friday, 9am–3pm',
      service_hours_es: 'Martes a viernes, 9h a 15h',
      service_hours_fr: 'Mardi au vendredi, 9h à 15h',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('services_hours', null, {});
};
