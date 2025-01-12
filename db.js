import mysql from 'mysql';

// cria a conexão com o banco de dados e exporta essa conexão;
export const db = mysql.createConnection({
  host: 'monorail.proxy.rlwy.net',
  user: 'root',
  password: 'kBurJkyPjyFfosFvSebSzCLFISeqPqbt',
  database: 'railway',
});
