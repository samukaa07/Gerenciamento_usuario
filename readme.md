Sistema de Gerenciamento de Usuários Desenvolvedor
Samuel Pereira Lima – Desenvolvedor Web e de Software.

Versão
1.0 - 10/05/2024

Pré-requisitos:

- Antes de começar, certifique-se de que as seguintes ferramentas estejam instaladas:
  • Java JDK 17: Necessário para rodar o backend Spring Boot.
  • Node.js: Necessário para o npm, que gerencia as dependências do Angular.
  • Angular CLI: Necessário para comandos de desenvolvimento do Angular.
  • MySQL: Sistema de gerenciamento de banco de dados utilizado pelo backend

  Configurando e Rodando o Backend

    1. Iniciar o MySQL:
       ▪ Garanta que o serviço do MySQL esteja rodando e que o banco de dados esteja configurado conforme as propriedades definidas no application.properties do Spring Boot.

    2. Migração de Banco de Dados com Flyway:
       ▪ Flyway será executado automaticamente ao iniciar a aplicação, aplicando quaisquer scripts de migração necessários.

    3. Iniciar o Spring Boot:
       ▪ Abra um terminal na pasta raiz do backend e execute: ./mvnw spring-boot:run
       • Isso irá compilar e iniciar o servidor do Spring Boot, geralmente acessível via: http://localhost:8080.

  Configurando e Rodando o Frontend:

    1. Instalar Dependências do Angular:
       ▪ Navegue até a pasta do projeto Angular e execute: npm install

    2. Iniciar o Servidor de Desenvolvimento do Angular:
       ▪ Ainda no diretório do frontend, execute: ng serve
       • Isso irá compilar a aplicação Angular e disponibilizá-la geralmente em: http://localhost:4200.

  Acessando a Aplicação:
  ▪ Abra um navegador e digite: http://localhost:4200.
  Isso deve carregar a interface do usuário, onde você pode interagir com o sistema de gerenciamento de usuários.

  Rotas Disponíveis:

           ▪ Frontend: 
               • /welcome: Tela inicial ou de boas-vindas.
                   ◦ /usuarios: Tela para gerenciamento de usuários (listagem, criação, edição e exclusão).
                 
           ▪ Backend:
               • /api/usuarios: Endpoint principal para operações CRUD de usuários.

Descrição:
Este documento oferece uma visão geral do desenvolvimento de um sistema para gerenciamento de usuários, destacando as principais funcionalidades e estruturas tanto do backend quanto do frontend.

Backend:
O backend foi desenvolvido utilizando:

Spring Boot: Simplifica a configuração e o lançamento da aplicação.
Spring Data JPA & Hibernate: Facilita a integração com o banco de dados MySQL.
Spring Security: Fornece autenticação e autorização.
Flyway: Gerencia as versões do banco de dados.
Java JDK 17: Utilizado para aproveitar funcionalidades modernas da linguagem Java.
Principais Componentes:
GerenciamentoUsuarioApplication: Ponto de entrada da aplicação Spring Boot.
UsuarioController: Gerencia as operações CRUD para usuários.
WebConfig: Configuração CORS para permitir requisições de diferentes origens.

Frontend:
O frontend foi desenvolvido com Angular 17, proporcionando uma interface responsiva e interativa:

Componentes: AppComponent e UsuariosComponent para gerenciar as operações e visualizações dos usuários.
Serviços: UsuarioService interage com o backend para realizar operações CRUD.
Rotas: Definições de navegação entre as diferentes telas da aplicação.
Estilos e Temas:
Utiliza Google Fonts (Roboto) e Material Icons.
Tema Angular Material (purple-green.css) para uma UI consistente e moderna.
Ferramentas e Tecnologias:
Ambiente de Desenvolvimento: Desenvolvido utilizando Angular 17 para o frontend e Spring Boot para o backend.
Tratamento de Erros: Utilização de MatSnackBar para exibir mensagens de feedback das operações.
Configuração e Uso:
Instruções para configurar e executar o projeto localmente, incluindo requisitos como Node.js e JDK, além de passos para iniciar o servidor e a aplicação frontend.
