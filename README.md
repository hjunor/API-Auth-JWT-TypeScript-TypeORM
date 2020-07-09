<h1 align="center">
    <img alt="logo" src="https://miro.medium.com/max/1478/0*10ldIs5O8Y1kXzDn.png" width="250px" />
</h1>

<h4 align="center">☕ Code and Coffee</h4>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>
</p>

<br>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io/)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Postegres](https://www.postgresql.org/docs/)


## 💻 Projeto

### Configure o ormconfig.json

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "dev",
  "password": "3n5df3k9",
  "database": "dev",
  "logging": false,
  "entities": [
    "src/app/models/*.ts"
  ],
  "migrations": [
    "src/database/migrations/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/database/migrations/",
    "migrationsDir": "src/database/migrations"
  }
}
```
Uma api construida para dar estrutura para futuros projetos construidos com TypeORM.

- Os usuários serão cadastrados através do email sem senha.

- Os usuários serão autenticados com un token JWT.

### Rodando o projeto 

No terninal crie seu container do Postegres caso não tenha o serviço no desktop.


Criando container Postegres. 

```bash
  docker run \
  --name postgres \
  -e POSTGRES_USER=dev \
  -e POSTGRES_PASSWORD=3n5df3k9 \
  -e POSTGRES_DB=dev \
  -p 5432:5432 \
  -d postgres \
```

Criando migration Users.

```bash
    yarn typeorm migration:create -n CreateUserTable
```
Criando a tabela no banco de dados.

```bash
  yarn typeorm migration:run
```
Iniciando o servidor.
```bash
  yarn dev
```

Pronto seu retorno vai ser esse.

```bash
    🔥 Server start
    🔥 database connection 
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`.
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`.
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.






