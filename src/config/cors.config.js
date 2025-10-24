export const corsOptions = {
  origin: "*",
  exponsedHeaders: ['Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
