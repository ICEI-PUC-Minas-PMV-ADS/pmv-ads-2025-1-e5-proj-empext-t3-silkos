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
    <th colspan="6" width="1000">CT-006<br>Erros ao Salvar Serviços</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de falha</strong></td>
    <td colspan="5">Erro ao salvar o cliente!, verifique se a campos em brancos antes de salvar.</td>
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




## Parte 2 - Testes por pares

A fim de aumentar a qualidade da aplicação desenvolvida, cada funcionalidade deve ser testada por um colega e os testes devem ser evidenciados. O colega "Tester" deve utilizar o caso de teste criado pelo desenvolvedor responsável pela funcionalidade (desenvolveu a funcionalidade e criou o caso de testes descrito no plano de testes).

### Exemplo

<table>
  <tr>
    <th colspan="6" width="1000">CT-001<br>Login com credenciais válidas</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema deve redirecionar o usuário para a página inicial do aplicativo após o login bem-sucedido.</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">José da Silva </td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Maria Oliveira </td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">08/05/2024</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo o login corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-time-sheet/assets/82043220/2e3c1722-7adc-4bd4-8b4c-3abe9ddc1b48"/></td>
  </tr>
</table>
