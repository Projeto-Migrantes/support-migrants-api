import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM services_offered`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more services offered. No entries have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('services_offered', [
    {
      institution_id: 1,
      services_offered_pt:
        'Acolhimento, orientação jurídica, cursos de português',
      services_offered_en: 'Shelter, legal advice, Portuguese classes',
      services_offered_es: 'Acogida, asesoría legal, clases de portugués',
      services_offered_fr:
        'Hébergement, conseils juridiques, cours de portugais',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 2,
      services_offered_pt:
        'Alojamento temporário, tradução, assistência psicológica',
      services_offered_en:
        'Temporary housing, translation, psychological support',
      services_offered_es:
        'Alojamiento temporal, traducción, apoyo psicológico',
      services_offered_fr:
        'Hébergement temporaire, traduction, soutien psychologique',
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 3,
      services_offered_pt: 'Oficinas de artes, idioma, orientação profissional',
      services_offered_en: 'Art workshops, language classes, career guidance',
      services_offered_es:
        'Talleres de arte, clases de idiomas, orientación profesional',
      services_offered_fr:
        "Ateliers d'art, cours de langue, orientation professionnelle",
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 4,
      services_offered_pt: 'Cursos de informática, emprego, estágio',
      services_offered_en: 'IT courses, job placement, internships',
      services_offered_es:
        'Cursos de informática, colocación laboral, pasantías',
      services_offered_fr:
        "Cours d'informatique, placement professionnel, stages",
      created_at: now,
      updated_at: now,
    },
    {
      institution_id: 5,
      services_offered_pt:
        'Apoio psicológico, auxílio escolar, orientação legal',
      services_offered_en:
        'Psychological support, school assistance, legal guidance',
      services_offered_es:
        'Apoyo psicológico, ayuda escolar, orientación legal',
      services_offered_fr:
        'Soutien psychologique, aide scolaire, orientation juridique',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('services_offered', null, {});
};
