import {db} from '../db.js';

// cria a tarefa
export const getTasks = (_, res) => {
  const q = "SELECT * FROM tasks";

  // executa a query no banco de dados e retorna o resultado
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
}