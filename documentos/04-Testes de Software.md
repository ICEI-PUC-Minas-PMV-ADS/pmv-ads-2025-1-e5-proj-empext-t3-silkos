# Planos de Testes de Software

Este documento apresenta os testes realizados na aplicação com o objetivo de validar suas funcionalidades e garantir uma experiência confiável ao usuário. A seguir, são detalhados os testes que comprovam como o sistema lida tanto com cenários de sucesso quanto com falhas, fornecendo feedback adequado e orientações claras ao usuário.



## Tipo de Teste

-   **Sucesso**: Tem o objetivo de verificar se as funcionalidades funcionam corretamente.
-   **Insucesso**: Tem o objetivo de verificar se o sistema trata erros de maneira correta.

### Parte 1 - Testes Unitários

Cada funcionalidade desenvolvida deve ser testada utilizando os casos de testes (sucesso e insucesso) criados pelo responsável pela funcionalidade. Todos os testes devem ser evidenciados.

<table>
  <tr>
    <th colspan="6" width="1000">CT-001<br>Realizar registro e login com sucesso</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema deve redirecionar o usuário para a página inicial do aplicativo após o login bem-sucedido.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">César Pereira</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">05/04/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo o login corretamente. Redirecionando o usuário a tela principal da aplicação.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-002<br>Erros no login e registro</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema deve redirecionar o usuário para a página inicial do aplicativo após o login bem-sucedido.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">César Pereira</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">05/04/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema deve informar o usuário em caso de erros no internos ou falta de informações.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-003<br>Realizar registro do serviço</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema mostra uma mensagem de Serviço salvo com sucesso e o valor total.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">Caique R. Magalhães</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">02/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está salvando corretamente o serviço. E mostrando a mensaagem de Sucesso ao salvar o serviço.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-004<br>Erros ao Salvar Serviços</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de falha</strong></td>
    <td colspan="5">Erro ao salvar o serviço!, Verifique se o cliente já existe ou se os campos estão preenchidos corretamente.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">Caique R. Magalhães</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">02/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema alerta com uma menssagem de erro, pedindo para verificar se os campos estão preenchidos corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-005<br>Realizar Cadastro de Clientes</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">Quando preenchido corretamente, o cliente será salvo e aparecerá em clientes cadastrados.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">Caique R. Magalhães</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está salvando corretamente o cliente cadastrado.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-006<br>Erros ao Cadastrar Cliente</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de falha</strong></td>
    <td colspan="5">Erro ao salvar o cliente, verifique se a campos em brancos antes de salvar.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">Caique R. Magalhães</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema alerta com uma menssagem de erro, pedindo para verificar se os campos estão preenchidos corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-007<br>Teste da página de recibos</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema deve gerar um PDF para que o usuário possa enviar ao cliente a nota de serviço.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">Davidson Marques</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O funcionamento da página está como o esperado e não apresentou erros nos testes.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-008<br>Erros ao Editar Valores</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de falha</strong></td>
    <td colspan="5">Erro ao salvar valores!</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">Márcio Emanuel Batista de Pádua</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema alerta com uma menssagem de erro, pedindo para verificar se os campos estão preenchidos corretamente respeitando os Datatypes corretos.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-009<br>Edição de Valores</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios do êxito</strong></td>
    <td colspan="5">Edição de valores realizada, com o preenchimento de todos os campos corretamente.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">Márcio Emanuel Batista de Pádua</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está salvando corretamente o valor editado.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-010<br>Erros ao Editar Valores</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de falha</strong></td>
    <td colspan="5">Erro ao salvar valores!</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">William Ribeiro Amaral</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema alerta com uma menssagem de erro.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-011<br>Edição de Valores</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios do êxito</strong></td>
    <td colspan="5">Edição de serviço realizada, com o preenchimento de todos os campos corretamente.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">William Ribeiro Amaral</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está salvando corretamente o valor editado do serviço.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-011<br>Edição de Valores</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios do êxito</strong></td>
    <td colspan="5">Vizualização e controle sobre orçamentos.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">César Pereira dos Santos Filho</td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">04/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está salvando corretamente o orçamento em pdf e permitindo o administrado/usuário apagar os respectivos.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

## Parte 2 - Testes por pares

A fim de aumentar a qualidade da aplicação desenvolvida, cada funcionalidade deve ser testada por um colega e os testes devem ser evidenciados. O colega "Tester" deve utilizar o caso de teste criado pelo desenvolvedor responsável pela funcionalidade (desenvolveu a funcionalidade e criou o caso de testes descrito no plano de testes).


<table>
  <tr>
    <th colspan="6" width="1000">CT-001<br>Página Cliente</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema deve cadastrar os dados do usuário.</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Caique Mgalhães </td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Davidson Marques </td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo o cadastro dos dados do cliente corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-002<br>Página Formulário</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema conseguir localizar o cliente cadastrado juntamente com seus dados na página cliente, conseguir selecionar o serviço e também adicionar as quantidades solicitadas e salvar os dados inseridos.</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Caique Mgalhães </td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Davidson Marques </td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo inserir e salvar o serviço corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-003<br>Página de Orçamentos</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">Vizualização e controle sobre orçamentos</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Caique Mgalhães </td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">César Pereira dos Santos Filho</td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">04/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo salver e apagar os orçamentos corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-004<br>Página de Recibo</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">Vizualização e dos serviços gerados e geração de PDF, conforme a data e o CLiente pesquisado</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Davidson Marques</td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Caique Magalhaes</td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">04/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo pesquisar e gerar o PDF corretamente. Não apresentou erro</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-005<br>Página de Serviço</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">Edição e exclusão dos serviços cadastrados na aplicação</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">William Ribeiro Amaral</td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Márcio Emanuel Batista de Pádua</td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo editar e excluír os serviços cadastrados. Não apresentou erro</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-006<br>Página Editar Valores</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">Edição e atualização de valores na aplicação</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Márcio Emanuel Batista de Pádua</td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">William Ribeiro Amaral</td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">03/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo editar e salvar os valores. Não apresentou erro funcional, apenas apresenta uma mensagem de erro quando nenhum valor é inserido, o que é esperado.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-007<br>Página Editar Valores</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">Edição e atualização de valores na aplicação</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Márcio Emanuel Batista de Pádua</td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Davidson Marques</td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">31/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo editar e salvar os valores. Não apresentou erro funcional, apenas apresenta uma mensagem de erro quando nenhum valor é inserido, o que é esperado.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-008<br>Página de Recibo</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">Busca de recibos por Data ou Nome e gerar PDF.</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Davidson Marques</td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Márcio Emanuel Batista de Pádua</td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">31/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo encontrar os recibos por nome e data além de gerar o PDF dos recibos.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="6" width="1000">CT-009<br>Página Orçamentos</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">Gerar PDF e excluir orçamentos.</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Davidson Marques</td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Márcio Emanuel Batista de Pádua</td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">31/05/2025</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo encontrar os recibos por nome e data além de gerar o PDF dos recibos.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">VIDEO LOCALIZADO DENTRO DA PASTA VIDEOS EM DOCS</td>
  </tr>
</table>
