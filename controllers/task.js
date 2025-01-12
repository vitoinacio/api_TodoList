import {db} from '../db.js';

// puxa as tarefas do banco de dados para vizualização
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

// adiciona uma nova tarefa ao banco de dados e insere o nome da tarefa
export const addTask = (req, res) => {
  const sql = 'INSERT INTO tasks (`task_name`) VALUES (?)';
  
  const values = [
    req.body.task_name,
  ];
  
  db.query(sql, [values], (err, results) => {
    if (err) return res.json(err);

    return res.status(200).json("Tarefa adicionada com sucesso!");
  })
};

// atualiza o nome da tarefa no banco de dados e insere o novo nome da tarefa
export const updateTask = (req, res) => {
  const sql = 'UPDATE tasks SET `task_name` = ? WHERE `id` = ?';
  
  const values = [
    req.body.task_name,
  ];

  db.query(sql, [...values, req.params.id], (err)=>{
    if (err) return res.json(err);

    return res.status(200).json("Tarefa atualizada com sucesso!");
  })
};

// deleta a tarefa do banco de dados pelo id
export const deleteTask = (req, res) => {
  const sql = 'DELETE FROM tasks WHERE `id` = ?';

  db.query(sql, [req.params.id], (err)=>{
    if (err) return res.json(err);

    return res.status(200).json("Tarefa deletada com sucesso!");
  })
};