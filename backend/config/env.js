// Loads/validates environment variables
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT, 10) || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/resume_analyzer',
  JWT_SECRET: process.env.JWT_SECRET || 'default_jwt_secret_key',
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || ''
};

module.exports = env;
