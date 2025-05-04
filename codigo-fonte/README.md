# SilkOS

Sistema de gestão de orçamentos e serviços para empresas de estamparia e personalização de camisetas.

##  Instruções de utilização

O SilkOS é uma aplicação web composta por duas partes:

- **Frontend**: Interface visual desenvolvida em React, onde o usuário realiza cadastros, edições e gera recibos e orçamentos.
- **Backend**: API Node.js com Express, Prisma e MongoDB, responsável pelas operações de banco de dados e envio de e-mails.

###  Como utilizar

1. **Acesse**: [https://silk-os.vercel.app](https://silk-os.vercel.app)
2. **Cadastre-se**:
   - Informe seu nome, email e senha.
   - Verifique sua conta via email (confirme clicando no link enviado).
3. **Login**:
   - Acesse com seu email e senha.
4. **Funcionalidades principais**:
   - Cadastro de clientes.
   - Criação de serviços (vetorização, layout, separação de cor, silk).
   - Geração de orçamentos e recibos em PDF.
   - Edição dos valores de serviços na tela "Editar Valores".

###  Manual do usuário

- **Clientes**: Vá para a aba “Clientes”, adicione nome, email, celular e endereços.
- **Serviços**: Em “Formulário”, selecione o cliente, serviços e quantidades para calcular o valor.
- **Recibos**: Use o filtro por data ou nome e gere um PDF com todos os serviços daquele período.
- **Orçamentos**: Gere PDF individual para cada serviço já registrado.
- **Administração**: Ajuste os valores base na tela de “Editar Valores”.

---

##  Implantação

A aplicação está publicada utilizando:

- **Frontend**: Vercel (React + Vite)  
  Acesse: [https://silk-os.vercel.app](https://silk-os.vercel.app)

- **Backend**: Render (Node.js + Express)  
  API: [https://silkos.onrender.com](https://silkos.onrender.com)

- **Banco de Dados**: MongoDB Atlas  
  Utilizado via Prisma ORM

---

##  Histórico de versões

### [0.1.0] - 03/05/2025
####  Adicionado
- Tela de cadastro e login com verificação por email
- Cadastro de clientes com múltiplos endereços
- Formulário de criação de serviço com cálculo dinâmico de valor
- Edição e exclusão de serviços
- Listagem com filtros e geração de recibo em PDF
- Geração de orçamento individual em PDF
- Tela para editar valores padrão dos serviços
- Recuperação de senha por email
- Backend completo com validação, token e autenticação
- Deploy frontend (Vercel) e backend (Render)

---
