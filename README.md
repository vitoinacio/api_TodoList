## Todo List API

### Propósito do Projeto
O objetivo deste projeto é fornecer uma API para gerenciar listas de tarefas (to-do lists). Através desta API, os usuários podem criar, ler, atualizar e deletar tarefas.

### Dependências e Tecnologias Usadas
- **Node.js**: Plataforma de execução para JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **cors**: Middleware para habilitar CORS garantindo a conexão entre o backend e o frontend.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env`.
- **mysql2**: Cliente MySQL para Node.js com suporte a Promises.

### Arquitetura do Projeto
O projeto segue uma arquitetura em camadas, dividida em:

- **Camada de Roteamento**: Responsável por definir as rotas da aplicação e associá-las aos controladores.
- **Camada de Controladores**: Contém a lógica de negócio e manipulação dos dados a partir das requisições recebidas.
- **Camada de Modelos**: Define os esquemas de dados e interage com o banco de dados MySQL.

### Configuração do Ambiente
Para configurar o ambiente e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone https://github.com/vitoinacio/api_TodoList.git
   cd api_TodoList
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente conforme necessário (exemplo: `.env`).

4. Inicie o servidor:
   ```sh
   npm start
   ```

### Utilização da API
A API expõe endpoints para gerenciar tarefas. As principais rotas são:

- **GET /tasks**: Retorna todas as tarefas.
- **POST /tasks**: Cria uma nova tarefa.
- **PUT /tasks/:id**: Atualiza uma tarefa existente pelo ID.
- **DELETE /tasks/:id**: Deleta uma tarefa pelo ID.

### Como Contribuir
Contribuições são bem-vindas! Siga estas diretrizes para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações:
   ```sh
   git checkout -b minha-branch
   ```

3. Faça commit de suas alterações:
   ```sh
   git commit -m "Minha contribuição"
   ```

4. Envie para a branch principal:
   ```sh
   git push origin minha-branch
   ```

5. Abra um Pull Request no GitHub.

### Licença
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

---