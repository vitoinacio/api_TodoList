import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DATABASE_URL;

let db;

function handleDisconnect() {
  db = mysql.createConnection(dbUrl);

  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar a database:', err);
      setTimeout(handleDisconnect, 2000); // Reconnect after 2 seconds
    } else {
      console.log('Conectado a database.');
    }
  });

  db.on('error', (err) => {
    console.error('Erro na database:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.fatal) {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

export { db };