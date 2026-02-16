<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 📌 Modelagem Relacional com NestJS + TypeORM

Projeto de estudo focado em modelagem de banco de dados relacional utilizando **NestJS** e **TypeORM**.

O objetivo é praticar a criação de entidades e seus relacionamentos (One-to-Many, Many-to-One e Many-to-Many), aplicando boas práticas de organização em camadas.

---
## Diagrama de ER

<img width="467" height="436" alt="entidades e relacionamentos" src="https://github.com/user-attachments/assets/b291de14-1379-4e9f-9492-89cc708e83e8" />

---

## 🚀 Tecnologias

- Node.js  
- NestJS  
- TypeORM  
- TypeScript  
- Banco de dados relacional  

---

## 🛠 Como executar

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/JVictorFreitasM/Modelagem-Relacional-TypeORM-NestJS.git
```

### 2️⃣ Instalar dependências

```bash
npm install 
```

### 3️⃣ Configurar o banco de dados

Certifique-se que no app.module exista isso:

```js
 imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Employee, Task, Meeting, Contactinfo]),
``` 

### 4️⃣ Iniciar o projeto

```bash
npm run start:dev
```
Modifique algum campo, por exemplo:
Em app.service.ts:
```js
const ceo = db.create(Employee, {
name: 'Mr. CEO',
```
Inicie o projeto e observe as tabelas sendo criadas em db.sqlite na raiz do projeto 
```bash
npm run start:dev
```
---

## 🎯 Objetivo

Projeto criado para consolidar conhecimentos em:

- Modelagem relacional  
- Uso de ORM  
- Arquitetura modular com NestJS  
- Organização de backend escalável  

---

## 👨‍💻 Autor

João Victor Freitas
