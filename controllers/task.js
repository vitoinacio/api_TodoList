import {db} from '../db.js';

// cria a tarefa
export const getTasks = (req, res) => {
  const sql = 'SELECT * FROM tasks';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send(err);
    }
    res.status(200).json(results);
  });
};