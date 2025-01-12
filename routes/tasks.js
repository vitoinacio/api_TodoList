import express from 'express';
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from '../controllers/task.js';

// cria um roteador para as tarefas
const router = express.Router();

// define a rota para as puxar as tarefas
router.get('/tasks', getTasks);
// define a rota para adicionar uma nova tarefa
router.post('/tasks', addTask);
// define a rota para atualizar uma tarefa
router.put('/tasks/:id', updateTask);
// define a rota para deletar uma tarefa
router.delete('/tasks/:id', deleteTask);

export default router;
