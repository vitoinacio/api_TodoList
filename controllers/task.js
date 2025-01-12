import {db} from '../db.js';

// puxa as tarefas do banco de dados
export const getTasks = (req, res) => {
  const sql = 'SELECT * FROM tasks';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao executar a querry:', err);
      return res.status(500).send(err);
    }
    res.status(200).json(results);
  });
};