<h1 align="center">Cadastro de Dev's </h1>

# Tecnologias
  * React js
  * Node js
  * Banco de dados Postgresql

# Como executar
 * Clone o repositório
 * Acesse a pasta backend e instale as dependências com yarn
 * No docker com o banco postgresql ja instalado execute o script:
    "docker run --name postBanco -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres"
 * Inicie o servidor com yarn dev
 * Para executar os test basta executar yarn test
 
Agora você pode acessar localhost:3000 do seu navegador.

 * Acesse a pasta frontend e instale as dependências com yarn
 * Inicie a aplicação com npm start
