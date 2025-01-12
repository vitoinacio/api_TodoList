import express from 'express';
import useRoutes from './routes/tasks.js';
import cors from 'cors';
import dotenv from 'dotenv';

// configura o dotenv para utilizar as variáveis de ambiente
dotenv.config();

const app = express();

// define o formato json para o express
app.use(express.json());
// define o cors para o express
app.use(cors());

// define a rota principal
app.use("/", useRoutes);

// define a porta do servidor
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});