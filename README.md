# 🌎 API RESTful – Support Migrants API

[![Node.js Version](https://img.shields.io/badge/node-22.14.0-brightgreen)](https://nodejs.org/) [![NPM Version](https://img.shields.io/badge/npm-v11.3.0-blue)](https://www.npmjs.com/)

## 📘 Description

The Support Migrants API connects migrants with organizations and institutions. This RESTful API provides endpoints to manage migrant and institutional data, making it easier to integrate and support migrant communities.

## 💻 Technologies

### Core

![NodeJS](https://img.shields.io/badge/node.js-22.14.0-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/express.js-4.21.1-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-ES2024-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Database

![Postgres](https://img.shields.io/badge/postgres-16.8-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-6.37.4-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

### Security & Validation

![JWT](https://img.shields.io/badge/JWT-9.0.2-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Joi](https://img.shields.io/badge/joi-17.13.3-%233068b7.svg?style=for-the-badge&logo=joi&logoColor=white)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn (v1.22+)
- PostgreSQL (v16.8 or higher)

## 🚀 How to Run

### Clone the repository

```bash
git clone https://github.com/Projeto-Migrantes/support-migrants-api.git
cd support-migrants-api
```

### Environment variables

Copy `.env.example` to `.env` and adjust values:

```env
# Database
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=migrants_db
DB_PORT=5432
DB_DIALECT=postgres

# Server
SV_PORT=3000

# JWT
JWT_SECRET=your_secret_key

# CORS
CORS_ORIGIN=http://localhost:3000

# Node
NODE_ENV=development

# API Key
API_KEY=your_api_key
```

### Install dependencies

```bash
npm install
```

### Create the database (development)

```bash
npm run db:create:dev
```

In hosted environments like Supabase, creating the database via CLI is not needed. Skip this step if your database is already created.

### Run migrations

- Development:

  ```bash
  npm run db:migrate:dev
  ```

- Production (for example, before deployment or via CI/CD):

  ```bash
  npm run db:migrate:prod
  ```

### Run seeders

- Development:

  ```bash
  npm run db:seed:dev
  ```

  This inserts data from `src/seeders/dev`, which may include fake users or testing data.

- Production:

  ```bash
  npm run db:seed:prod
  ```

  This inserts essential data from `src/seeders/prod`, such as initial categories.

### Full development flow

To drop and recreate all tables in development without dropping the database:

```bash
npm run db:undo:all:dev
npm run db:migrate:dev
npm run db:seed:dev
```

You can use:

```bash
npm run db:reset:dev
```

which runs those steps in sequence.

## 🛠️ Available Scripts

| Command                    | Description                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------ |
| `npm run dev`              | Starts the server in development mode with nodemon (restarts on file changes)        |
| `npm run start`            | Starts the server in production mode with node                                       |
| `npm run test`             | Runs tests using Mocha                                                               |
| `npm run test:coverage`    | Runs tests with a coverage report using c8 and Mocha                                 |
| `npm run lint`             | Runs ESLint to check code style and quality issues                                   |
| `npm run lint:fix`         | Runs ESLint and fixes basic style issues automatically                               |
| `npm run db:create:dev`    | Creates the development database                                                     |
| `npm run db:drop:dev`      | Drops the development database                                                       |
| `npm run db:migrate:dev`   | Runs migrations in development (creates tables, constraints)                         |
| `npm run db:undo:all:dev`  | Reverts all migrations in development (drops tables created by migrations)           |
| `npm run db:seed:dev`      | Runs seeders in `src/seeders/dev` (development testing data)                         |
| `npm run db:reset:dev`     | Runs `db:drop:dev`, `db:create:dev`, `db:migrate:dev`, and `db:seed:dev` in sequence |
| `npm run db:migrate:prod`  | Runs migrations in production (applies changes to hosted database)                   |
| `npm run db:undo:all:prod` | Reverts all migrations in production (drops tables created by migrations)            |
| `npm run db:seed:prod`     | Runs seeders in `src/seeders/prod` (production essential data)                       |

---

## 📚 API Documentation

After starting the server, access `GET /api/v2` for basic information. Full Swagger documentation will be available in a future update.

## 🗂️ Folder Structure

```
src/
│
├── config/          # Configurations (database, server, logger, etc.)
├── controllers/     # Control logic (data input/output, request handling)
├── middlewares/     # Request validations and interceptions (authentication, authorization, etc.)
├── migrations/      # Database migration files
├── models/          # Data models (table definitions with Sequelize)
├── repositories/    # Data access layer (queries, direct table manipulation)
├── routes/          # Route definitions (URL mapping to controllers)
├── schemas/         # Data validations (Joi) to ensure integrity of received information
├── seeders/         # Files to insert initial data into the database
├── services/        # Business logic (complex operations that shouldn't be in controllers)
├── utils/           # Utility functions (reusable functions for common tasks)
└── tests/           # Automated tests (unit tests, API tests)
```

## 🔄 Recent Refactoring

1. Layered architecture with clearly defined responsibilities

2. Removal of unnecessary files from the application

3. Compliance with REST architectural principles

4. Improved process for creating and seeding database tables

5. Implementation of best programming practices

6. Updates and improvements to routes and endpoints

7. Integration of Prettier and ESLint for code formatting and linting

> And other enhancements planned for the future...

## 🤝 Contribution

- Follow Gitflow for branch names (e.g., `feature/new-endpoint`)
- Open pull requests against the `develop` branch
- Write clear PR descriptions explaining your changes
- Use Conventional Commits in your commit messages (optional but recommended)

  - Examples:

    - `feat: add new migrant endpoint`
    - `fix: resolve user registration bug`
    - `docs: update README with contribution guidelines`

- Keep code style consistent as defined by ESLint and maintain folder organization

## 📝 License

This project is proprietary and licensed under [terms of use](https://github.com/Projeto-Migrantes/support-migrants-api/blob/main/LICENSE).
