import express from 'express';
import { getTasks } from '../controllers/task.js';

const router = express.Router();

// define a rota para as tarefas
router.get('/tasks', getTasks);

export default router;