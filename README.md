
## Description

Projeto para o desafio igma

## Installation

Para instalação do projeto, é necessário a utilização do docker, docker compose e postgres. Para projetos locais é necessario a instalação do nodeJs e nestjs.

### Continuos Integration
## https://github.com/Gabrielribeirof19/CadastroCliente/compare
foi adicionada uma rotina de de CI para a validação de PR's. Para executa-lo basta abrir um PR para a master.

## Running the app
Para rodar o projeto localmente, é necessario que uma instancia do postgres esteja rodandoo.
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# with docker
$ docker compose up
```

## Test
Para usar os scripts localmente mudar o host do datasource para localhost
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
