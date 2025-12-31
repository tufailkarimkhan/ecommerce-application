import dotenv from 'dotenv';
import path from 'path';
//dotenv.config({path: '.dev.env'});
// This ensures it looks in the root folder regardless of where the JS file is
dotenv.config({ path: path.resolve(process.cwd(), '.dev.env') });

console.log('DB_NAME from DBConfig:', process.env.DB_NAME);
console.log('PORT from DBConfig:', process.env.DB_PORT);

import { Sequelize } from 'sequelize-typescript';
import ProductDetails from '../models/product.model';

// Update these values with your actual database configuration
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false, // set to true for SQL query logging
  //models: [path.join(__dirname, '../src/models')] // Adjust the path to your models directory this use to load dynamically models into sequelize
  models:[ProductDetails]
});

export default sequelize;