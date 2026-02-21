# 📘 API de Cursos — Node.js + TypeScript

## 📌 Sobre o projeto

Esta é uma **API REST desenvolvida do zero**, com foco em **boas práticas**, organização de código e aprendizado de arquitetura backend.

Durante o desenvolvimento, comecei a aplicar o **conceito de containers (injeção de dependência)** — ideia que conheci estudando **Spring Boot** — e adaptei esse conceito para o ecossistema Node.js utilizando **TSyringe**.

Atualmente, a API implementa um **CRUD de cursos**, com documentação via Swagger.

---

## 🚀 Tecnologias utilizadas

- Node.js  
- Express  
- TypeScript  
- MySQL  
- TypeORM  
- TSyringe (Injeção de Dependência)  
- Swagger (Documentação da API)

---

## 📚 Funcionalidades

- Criar curso  
- Listar cursos  
- Buscar curso por ID  
- Atualizar curso  
- Deletar curso  

> ⚠️ **Observação**  
> O método **PATCH ainda não foi implementado** e será adicionado nas próximas atualizações do repositório.

---

## 📄 Documentação da API

A API está documentada com **Swagger**.

Após rodar o projeto, acesse:


http://localhost:3000/api-docs


---

## ⚙️ Como executar o projeto

```bash
# instalar dependências
npm install

# rodar migrations
npm run migration:run

# iniciar a aplicação
npm run dev
```


## 🛠 Roadmap (próximas melhorias)

Implementar PATCH

 - Testes automatizados

 - Relacionamentos entre Cursos, Alunos e Categorias

 - Validação de dados

 - Autenticação

 - Docker

 ## 📌 Observações finais

Este projeto faz parte do meu processo de aprendizado em backend e arquitetura de software.
Sugestões e feedbacks são muito bem-vindos 🙂
