# 📝 Tarefas App - Lista de Tarefas com Angular

Este projeto é uma aplicação web simples desenvolvida em Angular que permite ao usuário criar, visualizar, concluir e remover tarefas, com salvamento automático no navegador usando localStorage.

---

## 🎯 Objetivo

O objetivo deste projeto é proporcionar uma interface intuitiva para organização de tarefas, praticando os fundamentos do Angular 2+ como:

- Criação de componentes standalone  
- Uso de diretivas estruturais (`*ngIf`, `*ngFor`)  
- Two-way data binding (`[(ngModel)]`)  
- Manipulação de eventos  
- Estilização com CSS direto no componente  
- Armazenamento local (localStorage)

---

## 🛠️ Tecnologias Utilizadas

- Angular (v17+ standalone)  
- TypeScript  
- HTML5 e CSS3 (com Flexbox)  
- localStorage (armazenamento local do navegador)

---

## 🚀 Funcionalidades

- Adicionar tarefas com clique ou tecla Enter  
- Marcar tarefas como concluídas clicando nelas  
- Risco visual nas tarefas concluídas  
- Lista separada de tarefas pendentes e concluídas  
- Botão de remoção para cada item  
- Persistência dos dados (mesmo após recarregar a página)  
- Interface responsiva e amigável

---

## 🗂️ Estrutura do Projeto

Como o projeto foi desenvolvido com `standalone components`, toda a lógica, template e estilos estão dentro de `app.component.ts`.

```
tarefas-app/
├── docs/
├── src/
│   ├── app/
│   │   └── app.component.ts    # componente principal com HTML e CSS embutidos
├── angular.json
├── package.json
└── README.md
```

---

## 🧪 Como rodar o projeto localmente

Clone o repositório:

```bash
git clone https://github.com/martinsRossi/tarefas-app.git
cd tarefas-app
```

Instale as dependências:

```bash
npm install
```

Rode o projeto com:

```bash
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

---

## 🌐 Publicação

O projeto está publicado via GitHub Pages em:

🔗 https://martinsRossi.github.io/tarefas-app/

---

## 🚀 Feito por Renan Martins com Angular
