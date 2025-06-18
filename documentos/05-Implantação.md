# Implantação do Software

## Planejamento da Implantação

A implantação do sistema **SilkOS** foi planejada com foco em alta disponibilidade, facilidade de manutenção e escalabilidade para acompanhar a evolução da aplicação. O processo foi dividido em duas camadas principais: **Frontend** e **Backend**, integrados a um banco de dados na nuvem.

- **Frontend (Cliente):**  
  Desenvolvido com **React.js**, hospedado na plataforma **Vercel**, que permite deploy contínuo e integração com repositórios Git. Cada push na branch principal aciona o processo automático de build e publicação.

- **Backend (Servidor):**  
  Desenvolvido com **Node.js** e **Express**, utilizando **Prisma ORM** para integração com banco de dados **MongoDB Atlas**. O backend está hospedado na plataforma **Render**, com deploy automático a partir do GitHub.

- **Banco de Dados:**  
  Utiliza **MongoDB Atlas**, uma solução de banco de dados NoSQL em nuvem, garantindo alta disponibilidade e escalabilidade dos dados.

- **Outras tecnologias envolvidas:**
  - **EmailJS** ou **Nodemailer** para envio de orçamentos por e-mail.
  - **jsPDF** e **jspdf-autotable** para geração de PDFs.
  - **Axios** para comunicação entre cliente e servidor.

---
## Link da Aplicação em Ambiente de Produção

- **Frontend (Vercel):**  
  [https://silkos.vercel.app](https://silkos.vercel.app)

- **Backend (Render):**  
  [https://silkos-api.onrender.com](https://silkos-api.onrender.com) <!-- Substitua conforme necessário -->

---
## Planejamento de Evolução da Aplicação

A evolução do SilkOS será realizada de forma incremental, conforme feedback de uso e novas necessidades identificadas no processo de personalização e produção de camisetas.

### Melhorias Funcionais
- Adição de login com autenticação JWT.
- Histórico de orçamentos e serviços com filtros e exportações.

### Aprimoramentos na Interface (UI/UX)
- Responsividade total para dispositivos móveis.
- Melhor acessibilidade (teclado, leitura de tela, contraste).

---
