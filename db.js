import mysql from 'mysql2';
import dotenv from 'dotenv';

// carrega as variáveis de ambiente
dotenv.config();

// pega a URL da database do arquivo .env
const dbUrl = process.env.DATABASE_URL;

// cria uma variavel para a conexão com a database
let db;

// função para conectar a database e reconectar caso a conexão seja perdida
function handleDisconnect() {
  db = mysql.createConnection(dbUrl);

  // conecta a database
  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar a database:', err);
      setTimeout(handleDisconnect, 2000); // Reconnect after 2 seconds
    } else {
      console.log('Conectado a database.');
    }
  });

  // se ocorrer um erro na database, tenta reconectar
  db.on('error', (err) => {
    console.error('Erro na database:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.fatal) {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

// chama a função para conectar a database
handleDisconnect();

export { db };