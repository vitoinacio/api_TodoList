import express from 'express';
import useRoutes from './routes/tasks.js';
import cors from 'cors';

const app = express();

// define o formato json para o express
app.use(express.json());
// define o cors para o express
app.use(cors());

const port = process.env.PORT || 8800;

// define a rota principal
app.use("/", useRoutes);

// define a porta do servidor
app.listen(8800);