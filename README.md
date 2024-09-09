# API Testing - ReqRes

Este projeto contém testes automatizados para a API pública ReqRes utilizando [Cypress](https://www.cypress.io/). Os testes cobrem diferentes endpoints da API, verificando os códigos de status, requisições, respostas e validando schemas de resposta.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   
   ```  
   ```
   npm install
   ```  
## Observação

Na raiz do projeto, você encontrará o arquivo `cypress.env.example.json`. Este arquivo contém exemplos das variáveis de ambiente necessárias para rodar o projeto corretamente. 

Antes de executar os testes, copie o conteúdo deste arquivo para um novo arquivo chamado `cypress.env.json` e substitua os valores de exemplo pelas credenciais e URLs reais. 

Certifique-se de não versionar o arquivo `cypress.env.json` para manter suas credenciais seguras.

