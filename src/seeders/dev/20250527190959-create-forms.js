import logger from '../../config/logger.config.js';

export const up = async (queryInterface, Sequelize) => {
  const [results] = await queryInterface.sequelize.query(
    `SELECT COUNT(*) as total FROM forms`,
  );

  if (parseInt(results[0].total) >= 5) {
    logger.warn(
      'There are already 5 or more forms. No entries have been made.',
    );
    return;
  }

  const now = new Date();

  await queryInterface.bulkInsert('forms', [
    {
      subject: 'Dúvida sobre documentação',
      message:
        'Gostaria de saber quais documentos preciso para solicitar ajuda.',
      phone_number: '71999990001',
      full_name: 'Carlos Pereira',
      email: 'carlos@example.com',
      //migrants_id: 1,
      status: 'unread',
      created_at: now,
      updated_at: now,
    },
    {
      subject: 'Ajuda com moradia',
      message:
        'Preciso de orientação sobre como encontrar um local para morar.',
      phone_number: '71999990002',
      full_name: 'Ana Silva',
      email: 'ana@example.com',
      //migrants_id: 2,
      status: 'read',
      created_at: now,
      updated_at: now,
    },
    {
      subject: 'Curso de português',
      message:
        'Gostaria de saber onde posso fazer curso de português gratuito.',
      phone_number: '71999990003',
      full_name: 'Mohamed Ali',
      email: 'mohamed@example.com',
      //migrants_id: 3,
      status: 'resolved',
      created_at: now,
      updated_at: now,
    },
    {
      subject: 'Visto de trabalho',
      message: 'Quais os passos para conseguir um visto de trabalho no Brasil?',
      phone_number: '71999990004',
      full_name: 'Lucia Gomez',
      email: 'lucia@example.com',
      //migrants_id: 4,
      status: 'unread',
      created_at: now,
      updated_at: now,
    },
    {
      subject: 'Acesso à saúde',
      message: 'Como faço para ter acesso ao sistema de saúde brasileiro?',
      phone_number: '71999990005',
      full_name: 'Jean Pierre',
      email: 'jean@example.com',
      //migrants_id: 5,
      status: 'read',
      created_at: now,
      updated_at: now,
    },
  ]);
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('forms', null, {});
};
