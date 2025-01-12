import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DATABASE_URL;

export const db = mysql.createConnection(dbUrl);

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar a database:', err);
    return;
  }
  console.log('Conectado a database.');
});