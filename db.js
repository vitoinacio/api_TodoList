import mysql from 'mysql';

// cria a conexão com o banco de dados e exporta essa conexão;
export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'todolist',
});
