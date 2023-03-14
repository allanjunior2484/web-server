const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para o Express interpretar o corpo da requisição como JSON
app.use(express.json());

// Rota GET que retorna um objeto JSON com uma mensagem de boas-vindas
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo ao meu web service!' });
});

// Rota POST que recebe um objeto JSON com o nome e a idade de uma pessoa e retorna uma mensagem de saudação personalizada
app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Olá, ${name}! Você tem ${age} anos.` });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}.`);
});

