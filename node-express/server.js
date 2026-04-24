const express = require('express');
const userRoutes = require('./src/routes/userRoute');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Projeto Node.js com Express usando arquitetura em camadas',
    routes: {
      health: 'GET /health',
      users: 'GET /users',
      exampleUser: 'GET /users/example'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
