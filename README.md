# 🚀 **Formulário de Cadastro - React & Node.js**

Bem-vindo ao projeto de formulário de cadastro, desenvolvido com **React** no frontend e **Node.js** no backend. Este é um sistema simples que permite o cadastro de usuários com validação de dados no frontend e armazenamento temporário no backend.

O projeto é uma aplicação completa, desde o preenchimento do formulário até o armazenamento e recuperação dos dados no backend.

---

## 💡 **Objetivo**

O objetivo deste projeto é criar uma aplicação que permita aos usuários preencher um formulário com seus dados pessoais e enviá-los para o backend. O backend, por sua vez, valida os dados e os armazena temporariamente.

---

## 🛠️ **Tecnologias Utilizadas**

- **Frontend**: 
  - **React**: Para construção da interface do usuário.
  - **React Hooks**: `useState`, `useEffect` para gerenciar o estado e os efeitos colaterais.

- **Backend**:
  - **Node.js**: Para criação do servidor.
  - **Express**: Framework para construção de APIs RESTful.
  - **CORS**: Para permitir requisições entre diferentes origens.
  - **Body-Parser**: Para processar os dados enviados no corpo da requisição.
  
- **Desenvolvimento**:
  - **Nodemon**: Para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## 🔍 **Visão Geral do Projeto**

### **Frontend (React)**

O usuário preenche os campos de **nome**, **sobrenome** e **e-mail**. O frontend realiza a validação desses dados antes de enviá-los para o servidor.

### **Backend (Node.js + Express)**

O servidor Express recebe os dados do frontend e os armazena em um array temporário. Ele também fornece dois endpoints:
1. **`POST /submit`**: Para receber os dados e armazená-los.
2. **`GET /users`**: Para retornar todos os usuários cadastrados.

---

## 🧑‍💻 **Como Rodar o Projeto**

### **Requisitos**
- **Node.js** instalado (recomendado versão 14 ou superior).
- **NPM** (gerenciador de pacotes do Node.js).

### **Passos para Executar**

#### 1. **Rodar o Backend (Node.js)**

1. No diretório `server`, instale as dependências do backend:

    ```bash
    cd server
    npm install
    npm install --save-dev nodemon
    ```

2. Adicione ou altere o script `start` no `package.json`:

    ```json
    "scripts": {
      "start": "node server.js",
      "dev": "nodemon server.js"
    }
    ```

3. Inicie o servidor com o comando:

    ```bash
    npm run dev
    ```

    O servidor estará rodando em [http://localhost:5000](http://localhost:5000).

#### 2. **Rodar o Frontend (React)**

1. Navegue até o diretório `client`:

    ```bash
    cd client
    ```

2. Instale as dependências do frontend:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento do React:

    ```bash
    npm start
    ```

    O frontend estará rodando em [http://localhost:3000](http://localhost:3000).

---

## 📝 **Como Funciona**

1. O usuário preenche o formulário de cadastro com seu **nome**, **sobrenome** e **e-mail**.
2. O frontend valida os dados:
    - **Nome (fName)**: Não pode estar vazio.
    - **Sobrenome (lName)**: Não pode estar vazio.
    - **E-mail (email)**: Deve ser um e-mail válido.
3. Se a validação for bem-sucedida, os dados são enviados para o backend.
4. O servidor armazena os dados em um array temporário.
5. O frontend mostra uma mensagem de sucesso e limpa o formulário após o envio.

---

## ⚙️ **Endpoints da API**

### `GET /`

- **Descrição**: Retorna uma mensagem simples indicando que o servidor está funcionando.
- **Resposta**: `"Servidor está funcionando!"`

### `POST /submit`

- **Descrição**: Recebe os dados do formulário (`fName`, `lName`, `email`), valida e armazena no backend.
- **Requisição**: 
  - Corpo da requisição (JSON):
    ```json
    {
      "fName": "Nome",
      "lName": "Sobrenome",
      "email": "email@exemplo.com"
    }
    ```
- **Resposta**: 
  - Em caso de sucesso:
    ```json
    {
      "message": "Usuário cadastrado com sucesso!",
      "user": {
        "id": 1,
        "fName": "Nome",
        "lName": "Sobrenome",
        "email": "email@exemplo.com"
      }
    }
    ```

### `GET /users`

- **Descrição**: Retorna todos os usuários cadastrados.
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "fName": "Nome",
      "lName": "Sobrenome",
      "email": "email@exemplo.com"
    }
  ]




