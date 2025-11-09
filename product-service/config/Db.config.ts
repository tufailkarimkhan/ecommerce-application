import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config({path: '../../.dev.env'});

// Update these values with your actual database configuration
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false, // set to true for SQL query logging
  models: [path.join(__dirname, '../src/models')] // Adjust the path to your models directory
});

export default sequelize;