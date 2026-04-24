# desafio-backend-frameworks

Repositório da atividade prática sobre back-end com múltiplos frameworks, comparando um projeto em Node.js/Express com um projeto em Java/Spring Boot.

Link do repositório: https://github.com/Hosz/desafio-backend-frameworks

## Objetivo

O objetivo da atividade é demonstrar a inicialização de dois projetos back-end em linguagens diferentes e organizar cada um deles usando uma arquitetura em camadas.

## Estrutura do Repositório

```txt
desafio-backend-frameworks/
  node-express/
    server.js
    src/
      controllers/
      models/
      routes/
      services/

  java-springboot/
    pom.xml
    src/main/java/com/example/demo/
      controllers/
        UserController.java
      models/
        UserModel.java
      services/
        UserService.java
      DemoApplication.java
```

## Projeto Node.js com Express

O projeto `node-express` foi criado com Node.js e Express. Ele usa CommonJS e organiza a aplicação em rotas, controllers, services e models.

Para executar:

```bash
cd node-express
npm install
npm start
```

Para validar a sintaxe dos arquivos principais:

```bash
npm test
```

Rotas disponíveis:

```txt
GET /health
GET /users
GET /users/example
```

Fluxo das camadas:

```txt
server.js -> routes -> controllers -> services -> models
```

## Projeto Java com Spring Boot

O projeto `java-springboot` foi criado com Spring Boot, Maven Wrapper, Spring Web MVC e Lombok.

Principais arquivos:

- `DemoApplication.java`: classe principal que inicializa o Spring Boot.
- `controllers/UserController.java`: recebe as requisições HTTP usando anotações como `@GetMapping`.
- `services/UserService.java`: concentra a operação de listagem dos usuários de exemplo.
- `models/UserModel.java`: representa o modelo de usuário retornado pela API.

Para executar:

```bash
cd java-springboot
./mvnw spring-boot:run
```

Para rodar os testes:

```bash
./mvnw test
```

Rotas disponíveis:

```txt
GET /health         -> retorna apenas HTTP 200 OK
GET /users          -> lista usuários de exemplo
GET /users/example  -> retorna o primeiro usuário da lista
```

Fluxo das camadas:

```txt
DemoApplication -> Controller -> Service -> Model
```

No Spring Boot não foi criada uma pasta `routes`, porque o próprio controller define as rotas por meio das anotações do framework. Por exemplo, `@GetMapping("/users")` liga a URL `/users` ao método correspondente no `UserController`.

## Arquitetura em Camadas

Nos dois projetos, a organização separa responsabilidades:

- `controllers`: recebem a requisição HTTP e retornam a resposta.
- `routes`: no Express, concentram o mapeamento das rotas antes de chamar o controller.
- `services`: concentram a regra ou operação principal da aplicação.
- `models`: representam os dados usados pela aplicação.

No Node.js/Express, o arquivo `server.js` inicializa o servidor, registra middlewares e conecta as rotas de usuário. As rotas chamam o controller, o controller chama a service e a service usa o model `User`.

No Java/Spring Boot, a classe `DemoApplication` inicializa a aplicação. O `UserController` expõe os endpoints, injeta `UserService` com Lombok e retorna objetos `UserModel`.

## Comparação entre Express e Spring Boot

O Express é mais direto para iniciar. Com poucos arquivos e a dependência `express`, já é possível criar rotas e subir um servidor HTTP. Essa simplicidade dá bastante liberdade, mas exige que o desenvolvedor organize manualmente as camadas do projeto.

O Spring Boot possui mais estrutura desde o início. Ele usa convenções, anotações e gerenciamento de dependências pelo Maven. O código tende a ser mais verboso, mas a organização fica mais padronizada, especialmente em projetos maiores.

Na gestão de dependências, o Node.js usa `package.json` e `package-lock.json`. O Spring Boot usa `pom.xml` e o Maven Wrapper (`mvnw`), permitindo executar o projeto sem depender de uma instalação global do Maven.

Em resumo, Express favorece simplicidade e flexibilidade. Spring Boot favorece padronização, integração com o ecossistema Java e estrutura mais robusta para aplicações maiores.

## Critérios de Avaliação

### Organização do Git

O repositório foi organizado com duas pastas principais, uma para cada framework solicitado:

```txt
node-express/
java-springboot/
```

Também foi criado um `.gitignore` para evitar o versionamento de arquivos gerados, dependências locais e artefatos de build, como `node_modules/`, `target/` e arquivos `.log`.

### Conformidade Arquitetural

As pastas criadas refletem a separação em camadas estudada na atividade:

- No Express, a aplicação possui `routes`, `controllers`, `services` e `models`.
- No Spring Boot, a aplicação possui `controllers`, `services` e `models`.

Essa separação evita concentrar toda a lógica em um único arquivo e deixa claro o papel de cada camada.

### Capacidade Analítica

A comparação entre os frameworks considera três pontos principais:

- Facilidade de configuração inicial.
- Verbosidade do código.
- Gestão de dependências.

Com isso, o README não apenas descreve a estrutura dos projetos, mas também apresenta uma análise técnica das diferenças entre Node.js/Express e Java/Spring Boot.
