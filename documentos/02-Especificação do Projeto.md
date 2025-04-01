# Especificações do Projeto

 O grande problema a ser tratado é a ineficiência operacional da empresa devido a processos manuais e descentralizados na precificação, orçamentação e organização de pedidos e serviços ao qual buscaremos tratar com a automatização do cálculo de orçamentos, centralização da organização de pedidos e serviços, em resumo, o SilkOS busca resolver o problema da ineficiência operacional através da Automação, reduzindo a dependência de processos manuais e propensos a erros, e da centralização, Organizando e consolidando informações em um único sistema.

## Usuários
| Tipo de Usuário   | Descrição | Responsabilidades |
|------------------|-----------|------------------|
| administrador/funcionário | Gerencia e utiliza a aplicação com foco em soluções de otimização de processos mais especificamente no setor de personalização de produtos. | Entender as necessidades de PMEs no setor de personalização, propor soluções tecnológicas para otimizar seus processos e possuir uma visão estratégica e foco em resultados. |

## Arquitetura e Tecnologias

A arquitetura do projeto SilkOS foi concebida para ser modular, escalável e de fácil manutenção, visando atender às necessidades específicas do nosso cliente que possui uma empresa no setor de personalização de produtos, para a criação dessa solução está sendo utilizanda as tecnologias de react, Javascript e o banco de dados MongoDB. 

![image](https://github.com/user-attachments/assets/1fcc6f15-48c0-4880-af6d-a72ccdd0a46c)

## Project Model Canvas

![image](https://github.com/user-attachments/assets/c28a30db-7f30-4133-af6a-166c49067c70)

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
| **RF-006** | O sistema deve possuir botões de ação para editar e excluir registros na tabela de serviços. | ALTA |
| **RF-007** | O sistema deve permitir o cadastro de login e senha para o supervisor da empresa. | ALTA |
| **RF-008** | O sistema deve possuir uma funcionalidade de recuperação de senha caso o supervisor a perca. | ALTA |
| **RF-009** | O sistema deve permitir a pesquisa de serviços e clientes cadastrados. | MÉDIA |
| **RF-010** | O sistema deve permitir a edição de valores para vetorização e estampas. | MÉDIA |
| **RF-011** | O sistema deve permitir a exportação de orçamentos para PDF. | MÉDIA |
| **RF-012** | O sistema deve permitir a definição de um período para filtrar os recibos emitidos. | MÉDIA |

---

## **Requisitos Não Funcionais**

| ID       | Descrição do Requisito                                                  | Prioridade |
|----------|--------------------------------------------------------------------------|------------|
| **RNF-001** | O sistema deve ser responsivo para funcionar em dispositivos móveis. | ALTA |
| **RNF-002** | O sistema deve possuir um design intuitivo e de fácil usabilidade. | ALTA |
| **RNF-003** | O sistema deve armazenar os dados em um banco de dados MySQL. | ALTA |
| **RNF-004** | Os dados devem ser protegidos contra acessos não autorizados. | ALTA |
| **RNF-005** | O sistema deve garantir a segurança do login do supervisor com criptografia de senha. | ALTA |
| **RNF-006** | O tempo de resposta para ações como salvar, editar e excluir deve ser inferior a 2 segundos. | MÉDIA |
| **RNF-007** | O sistema deve permitir a geração de arquivos PDF de recibos e orçamentos sem perda de formatação. | MÉDIA |
| **RNF-008** | O sistema deve permitir múltiplos usuários simultaneamente sem comprometer o desempenho. | MÉDIA |
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

![DCU](https://github.com/user-attachments/assets/41389381-0a2d-4eb6-9d15-0254a403f34d)


Diagrama criado via [draw.io](http://draw.io/)

## Projeto da Base de Dados - SilkOS

![image](https://github.com/user-attachments/assets/114f5276-27af-41d9-a25f-01a153c16203)


## 1. Estrutura do Banco de Dados
A base de dados do **SilkOS** é composta pelas seguintes coleções:

### 1.1. Coleção `User`
Armazena os dados dos usuários do sistema.

#### Exemplo de Documento:
```json
{
  "_id": ObjectId("..."),
  "createdAt": ISODate("2025-03-31T12:00:00Z"),
  "email": "usuario@email.com",
  "name": "João Silva",
  "password": "hash_senha"
}
```

### 1.3. Coleção `Servico`
Armazena os serviços prestados aos clientes.

#### Exemplo de Documento:
```json
{
  "_id": ObjectId("..."),
  "nome": "Maria Souza",
  "email": "maria@email.com",
  "celular": "(11) 99999-9999"
  "servico1": "Sublimação",
  "servico2": "Transfer Laser",
  "qtdCor": 4,
  "qtdPeças": 10,
  "data": ISODate("2025-03-31T12:00:00Z")
}
```

### 1.4. Coleção `Valores`
Contém os valores de serviços com base na complexidade e características do trabalho.

#### Exemplo de Documento:
```json
{
  "_id": ObjectId("..."),
  "vSimples": 50.00,
  "vMediana": 75.00,
  "vComplexo": 120.00,
  "layout": 30.00,
  "sepCor": 15.00,
  "vlrQtdCor": 10.00
}
```

## 2. Relacionamentos
- `Servico` pode estar vinculado a um `Cliente` caso os serviços sejam personalizados para clientes específicos.
- `User` gerencia os `Servicos` cadastrados no sistema.
- `Valores` são utilizados para precificar os serviços cadastrados em `Servico`.

## 3. Índices e Otimização
Para melhorar a eficiência do banco de dados, os seguintes índices serão criados:
- `User.email` (único) para garantir autenticação rápida.
- `Cliente.email` para facilitar buscas.
- `Servico.nome` para consultas eficientes de serviços disponíveis.

## 4. Regras de Validação
Utilizando **JSON Schema Validation**, podemos garantir a integridade dos dados. Exemplo para `User`:
```json
{
  "$jsonSchema": {
    "bsonType": "object",
    "required": ["email", "name", "password"],
    "properties": {
      "email": { "bsonType": "string", "pattern": "^.+@.+$", "description": "Email válido" },
      "name": { "bsonType": "string", "description": "Nome do usuário" },
      "password": { "bsonType": "string", "description": "Hash da senha" }
    }
  }
}
```

## 5. Exemplos de Consultas

### Buscar serviços cadastrados:
```javascript
db.servico.find({})
```

### Listar clientes pelo email:
```javascript
db.cliente.find({ email: "maria@email.com" })
```

