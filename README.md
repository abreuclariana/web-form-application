# 🎉 Formulário de Contato Simples com Validação e Armazenamento Local 🚀

Se você está procurando um jeito prático de coletar dados de um formulário com validação de e-mail e armazenamento local, você chegou no lugar certo! 😎

Este é um pequeno e simpático aplicativo em **React** onde você pode preencher seu nome, sobrenome e e-mail. Além disso, ele vai validar se os campos estão corretos e, claro, armazenar suas informações de forma segura no **Local Storage** para que você não perca nenhum dado! 🙌

## 🔥 Funcionalidades Incríveis

### 💾 Armazenamento Local:
Os dados inseridos ficam guardadinhos no **Local Storage**. Isso significa que, mesmo se você recarregar a página, as informações continuam lá. Que prático, né? 😜

### ⚠️ Validação de Dados:
Não queremos e-mails errados ou campos vazios! Este formulário valida se:
- **Nome** e **Sobrenome** estão preenchidos.
- **E-mail** tem um formato bonitinho e correto (sem erros!).

### ✨ Mensagens de Erro:
Quando um dado não é válido, uma mensagem de erro aparece para te dar aquele toque, tipo: "Ei, preenche isso aí, por favor!" 😅

### 🧼 Limpeza do Formulário:
Mudou de ideia? Não tem problema! Você pode limpar tudo a qualquer momento e começar de novo, sem estresse. 😌

## 👩‍💻 Como Funciona o Código

### Estado do Componente
O estado está organizadinho com três variáveis principais:
- **contact**: Guarda os dados do formulário (nome, sobrenome e e-mail).
- **errors**: Fica de olho nos erros de validação e os exibe quando necessário.
- **isSubmitted**: Nos avisa se o formulário foi enviado com sucesso. 🎉

### `useEffect` Mágico ✨
Quando a página carrega, o aplicativo dá uma olhadinha no **Local Storage** e, se tiver dados lá, já preenche o formulário automaticamente! Mais rápido que um super-herói. 🦸‍♂️

### Validação Simples, mas Poderosa 💪
A função `validateInputs` vai validar os seguintes critérios:
1. **Nome** (fName): Não pode ficar vazio.
2. **Sobrenome** (lName): Não pode ficar vazio.
3. **E-mail** (email): Tem que ser um e-mail válido, tipo `meuemail@dominio.com`.

### Envio do Formulário 🚀
Quando você clicar em "Enviar", ele vai:
1. Verificar se os dados estão ok.
2. Salvar tudo no **Local Storage**.
3. Mostrar uma mensagem de sucesso.
4. Resetar o formulário depois de 3 segundos. (Porque a gente gosta de ser organizado!) ⏳

### Limpeza de Dados 💥
Quer começar de novo? O botão "Limpar" vai tirar todos os dados e erros do formulário e apagar tudo do **Local Storage**. Zero! 💯

## 🛠 Como Rodar o Projeto

Siga esses passos para ver o formulário em ação:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/formulario-contato.git


