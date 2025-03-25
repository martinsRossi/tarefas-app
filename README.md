📝 Tarefas App - Lista de Tarefas com Angular

Este projeto é uma aplicação web simples desenvolvida em Angular que permite ao usuário criar, visualizar, concluir e remover tarefas, com salvamento automático no navegador usando localStorage.

---

🎯 Objetivo

O objetivo deste projeto é proporcionar uma interface intuitiva para organização de tarefas, praticando os fundamentos do Angular 2+ como:

- Criação de componentes standalone
- Uso de diretivas estruturais (*ngIf, *ngFor)
- Two-way data binding ([(ngModel)])
- Manipulação de eventos
- Estilização com CSS direto no componente
- Armazenamento local (localStorage)

---

🛠️ Tecnologias Utilizadas

- Angular (v17+ standalone)
- TypeScript
- HTML5 e CSS3 (com Flexbox)
- localStorage (armazenamento local do navegador)

---

🚀 Funcionalidades

- Adicionar tarefas com clique ou tecla Enter
- Marcar tarefas como concluídas clicando nelas
- Risco visual nas tarefas concluídas
- Lista separada de tarefas pendentes e concluídas
- Botão de remoção para cada item
- Persistência dos dados (mesmo após recarregar a página)
- Contador de tarefas (opcional)
- Interface responsiva e amigável

---

🗂️ Estrutura do Projeto

Como o projeto foi desenvolvido com `standalone components`, toda a lógica, template e estilos estão dentro de `app.component.ts`.
