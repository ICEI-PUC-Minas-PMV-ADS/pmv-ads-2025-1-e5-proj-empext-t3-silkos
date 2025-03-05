# Especificações do Projeto

 O grande problema a ser tratado é a ineficiência operacional da empresa devido a processos manuais e descentralizados na precificação, orçamentação e organização de pedidos e serviços ao qual buscaremos tratar com a automatização do cálculo de orçamentos, centralização da organização de pedidos e serviços, em resumo, o SilkOS busca resolver o problema da ineficiência operacional através da Automação, reduzindo a dependência de processos manuais e propensos a erros, e da centralização, Organizando e consolidando informações em um único sistema.

## Usuários
| Tipo de Usuário   | Descrição | Responsabilidades |
|------------------|-----------|------------------|
| administrador/funcionário | Gerencia e utiliza a aplicação com foco em soluções de otimização de processos mais especificamente no setor de personalização de produtos. | Entender as necessidades de PMEs no setor de personalização, propor soluções tecnológicas para otimizar seus processos e possuir uma visão estratégica e foco em resultados. |

## Arquitetura e Tecnologias

Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. 

![image](https://github.com/user-attachments/assets/1fcc6f15-48c0-4880-af6d-a72ccdd0a46c)

## Project Model Canvas

Deve ser desenvolvido a partir do microfundamento: Empreendedorismo e inovação.
Colocar a imagem do modelo construído apresentando a proposta de solução.

> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

Para mais informações, consulte os microfundamentos Fundamentos de Engenharia de Software e Engenharia de Requisitos de Software. 

### Requisitos Funcionais


| ID       | Descrição do Requisito                                                   | Prioridade |
|----------|---------------------------------------------------------------------------|------------|
| **RF-001** | O sistema deve permitir o cadastro de clientes com nome, e-mail e telefone. | ALTA |
| **RF-002** | O sistema deve permitir o cadastro de serviços de vetorização e estampas. | ALTA |
| **RF-003** | O sistema deve permitir a edição e exclusão de serviços cadastrados. | ALTA |
| **RF-004** | O sistema deve permitir a criação de orçamentos com base na quantidade de cores e peças. | ALTA |
| **RF-005** | O sistema deve permitir a geração de recibos para os clientes. | ALTA |
| **RF-006** | O sistema deve permitir a pesquisa de serviços e clientes cadastrados. | MÉDIA |
| **RF-007** | O sistema deve permitir a edição de valores para vetorização e estampas. | MÉDIA |
| **RF-008** | O sistema deve permitir a exportação de orçamentos para PDF. | MÉDIA |
| **RF-009** | O sistema deve permitir a definição de um período para filtrar os recibos emitidos. | MÉDIA |
| **RF-010** | O sistema deve possuir botões de ação para editar e excluir registros na tabela de serviços. | ALTA |
| **RF-011** | O sistema deve permitir o cadastro de login e senha para o supervisor da empresa. | ALTA |
| **RF-012** | O sistema deve possuir uma funcionalidade de recuperação de senha caso o supervisor a perca. | ALTA |

---

## **Requisitos Não Funcionais**

| ID       | Descrição do Requisito                                                  | Prioridade |
|----------|--------------------------------------------------------------------------|------------|
| **RNF-001** | O sistema deve ser responsivo para funcionar em dispositivos móveis. | ALTA |
| **RNF-002** | O sistema deve possuir um design intuitivo e de fácil usabilidade. | ALTA |
| **RNF-003** | O tempo de resposta para ações como salvar, editar e excluir deve ser inferior a 2 segundos. | MÉDIA |
| **RNF-004** | O sistema deve armazenar os dados em um banco de dados MySQL. | ALTA |
| **RNF-005** | O sistema deve permitir múltiplos usuários simultaneamente sem comprometer o desempenho. | MÉDIA |
| **RNF-006** | Os dados devem ser protegidos contra acessos não autorizados. | ALTA |
| **RNF-007** | O sistema deve permitir a geração de arquivos PDF de recibos e orçamentos sem perda de formatação. | MÉDIA |
| **RNF-008** | O sistema deve garantir a segurança do login do supervisor com criptografia de senha. | ALTA |

---



Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Caso de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

Para mais informações, consulte o microfundamento Engenharia de Requisitos de Software 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
 
Para mais informações, consulte o microfundamento "Modelagem de Dados".

