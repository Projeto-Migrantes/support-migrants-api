import dotenv from 'dotenv';
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}.local` });

import checkEnvVariables from '../utils/check-env-variables.js';

checkEnvVariables();

export default dotenv;
