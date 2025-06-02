import logger from '../../config/logger.config.js';
import { createHash } from '../../utils/hash-password.util.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM migrants`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more migrants. No insertions were made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('migrants', [
    {
      full_name: 'Carlos Henrique Silva',
      email: 'carlos.silva@example.com',
      date_of_birth: '1990-05-10',
      phone_number: '+5571999999991',
      crnm: 'CRNM12345',
      password: await createHash('hashed_password_1'),
      registration_data: now,
      /*
      consent: true,
      purpose: 'Busca de emprego',
      */
      address_id: 1,
      address_complement: 'Apto 101',
      address_number: '500',
      social_name: null,
      language_preference: 'Português',
      entry_into_brazil: '2021-01-15',
      migration_reason: 'Trabalho',
      country_of_origin: 'Venezuela',
      gender: 'Masculino',
      marital_status: 'Solteiro',
      literacy_level: 'Superior Completo',
      created_at: now,
      updated_at: now,
    },
    {
      full_name: 'Maria Fernanda López',
      email: 'maria.lopez@example.com',
      date_of_birth: '1985-08-20',
      phone_number: '+5571999999992',
      crnm: 'CRNM12346',
      password: await createHash('hashed_password_2'),
      registration_data: now,
      /*
      consent: true,
      purpose: 'Busca de emprego',
      */
      address_id: 2,
      address_complement: 'Casa',
      address_number: '250',
      social_name: null,
      language_preference: 'Espanhol',
      entry_into_brazil: '2020-05-10',
      migration_reason: 'Família',
      country_of_origin: 'Colômbia',
      gender: 'Feminino',
      marital_status: 'Casada',
      literacy_level: 'Ensino Médio',
      created_at: now,
      updated_at: now,
    },
    {
      full_name: 'Ahmed Farouk',
      email: 'ahmed.farouk@example.com',
      date_of_birth: '1992-11-12',
      phone_number: '+5571999999993',
      crnm: 'CRNM12347',
      password: await createHash('hashed_password_3'),
      registration_data: now,
      /*
      consent: true,
      purpose: 'Busca de emprego',
      */
      address_id: 3,
      address_complement: null,
      address_number: '120',
      social_name: null,
      language_preference: 'Inglês',
      entry_into_brazil: '2022-03-01',
      migration_reason: 'Educação',
      country_of_origin: 'Egito',
      gender: 'Masculino',
      marital_status: 'Solteiro',
      literacy_level: 'Superior Incompleto',
      created_at: now,
      updated_at: now,
    },
    {
      full_name: 'Aisha Kamara',
      email: 'aisha.kamara@example.com',
      date_of_birth: '1995-06-25',
      phone_number: '+5571999999994',
      crnm: 'CRNM12348',
      password: await createHash('hashed_password_4'),
      registration_data: now,
      /*
      consent: true,
      purpose: 'Busca de emprego',
      */
      address_id: 4,
      address_complement: 'Bloco B',
      address_number: '88',
      social_name: null,
      language_preference: 'Francês',
      entry_into_brazil: '2019-09-30',
      migration_reason: 'Refúgio',
      country_of_origin: 'Senegal',
      gender: 'Feminino',
      marital_status: 'Solteira',
      literacy_level: 'Ensino Fundamental',
      created_at: now,
      updated_at: now,
    },
    {
      full_name: 'Jorge Luis Ramirez',
      email: 'jorge.ramirez@example.com',
      date_of_birth: '1988-02-17',
      phone_number: '+5571999999995',
      crnm: 'CRNM12349',
      password: await createHash('hashed_password_5'),
      registration_data: now,
      /*
      consent: true,
      purpose: 'Busca de emprego',
      */
      address_id: 5,
      address_complement: 'Sala 05',
      address_number: '305',
      social_name: null,
      language_preference: 'Espanhol',
      entry_into_brazil: '2018-07-22',
      migration_reason: 'Negócios',
      country_of_origin: 'Peru',
      gender: 'Masculino',
      marital_status: 'Casado',
      literacy_level: 'Superior Completo',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('migrants', null, {});
};
