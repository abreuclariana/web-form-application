const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors()); // Permite requisições do frontend
app.use(bodyParser.json()); // Permite processar JSON no body

let users = []; // Armazena os usuários temporariamente

// Rota para a raiz
app.get("/", (req, res) => {
  res.send("Servidor está funcionando!");
});

// Rota para receber os dados do formulário
app.post("/submit", (req, res) => {
  const { fName, lName, email } = req.body;
  if (!fName || !lName || !email) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  const newUser = { id: users.length + 1, fName, lName, email };
  users.push(newUser);
  res.status(201).json({ message: "Usuário cadastrado com sucesso!", user: newUser });
});

// Rota para exibir os usuários cadastrados
app.get("/users", (req, res) => {
  res.json(users);
});

// Serve os arquivos estáticos do React em produção
app.use(express.static(path.join(__dirname, "client/build")));

// Serve a aplicação React para todas as rotas desconhecidas (para roteamento do React)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
