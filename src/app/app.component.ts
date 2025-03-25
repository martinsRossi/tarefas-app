import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="container">
  <h1>{{ titulo }}</h1>

  <div class="formulario">
    <input
      type="text"
      [(ngModel)]="novaTarefa"
      placeholder="Digite uma nova tarefa"
      (keyup.enter)="adicionarTarefa()"
    />
    <button (click)="adicionarTarefa()">Adicionar</button>
  </div>

  <div class="listas">
    <div class="lista">
      <h2>Tarefas Pendentes</h2>
      <ul *ngIf="getTarefasPendentes().length > 0; else semPendentes">
        <li *ngFor="let tarefa of getTarefasPendentes()">
          <span (click)="alternarConclusao(tarefa)">
            {{ tarefa.nome }}
          </span>
          <button class="remover" (click)="removerTarefa(tarefas.indexOf(tarefa))">
            Remover
          </button>
        </li>
      </ul>
      <ng-template #semPendentes>
        <p>🎉 Nenhuma tarefa pendente!</p>
      </ng-template>
    </div>
  
    <div class="lista">
      <h2>Tarefas Concluídas</h2>
      <ul *ngIf="getTarefasConcluidas().length > 0; else semConcluidas">
        <li *ngFor="let tarefa of getTarefasConcluidas()" class="concluida">
          <span (click)="alternarConclusao(tarefa)">
            {{ tarefa.nome }}
          </span>
          <button class="remover" (click)="removerTarefa(tarefas.indexOf(tarefa))">
            Remover
          </button>
        </li>
      </ul>
      <ng-template #semConcluidas>
        <p>📝 Nenhuma tarefa concluída ainda.</p>
      </ng-template>
    </div>
  </div>
  
  `,
  styles: [`
  .container {
    width: 300px;
    margin: 50px auto;
    font-family: Arial, sans-serif;
  }
  
  h1,
  h2 {
    text-align: center;
  }
  
  .formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .listas {
    display: flex;
    justify-content: center;
    gap: 80px;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .lista {
    width: 300px;
  }
  

  input {
    width: 80%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px 12px;
    margin-bottom: 20px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #3498db;
    color: white;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    margin: 5px 0;
    padding: 12px 16px;
    border-radius: 8px;
    min-height: 48px;
    line-height: 1;
  }
  
  li span {
    flex: 1;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: left;
    padding-right: 12px; /* 👈 aqui é o espaçamento entre texto e botão */
  }
  
  /* Riscado permanente (concluído) */
  li.concluida span {
    text-decoration: line-through;
    color: #888;
  }
  
  /* Riscado temporário (hover apenas em pendente) */
  li:not(.concluida):hover span {
    text-decoration: line-through;
    color: #999;
  }
  
  .remover {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 14px;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0; /* 👈 garante que o botão não suba por margem externa */
  }
  
  `]
})
export class AppComponent {
  titulo = 'Lista de Tarefas';
  novaTarefa = '';

  tarefas: { nome: string; concluida: boolean }[] = [];

  constructor() {
    this.carregarTarefas();
  }

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
      this.salvarTarefas();
    }
  }

  alternarConclusao(tarefa: { nome: string; concluida: boolean }) {
    tarefa.concluida = !tarefa.concluida;
    this.salvarTarefas();
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
    this.salvarTarefas();
  }

  salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      this.tarefas = JSON.parse(tarefasSalvas);
    }
  }

  getTarefasPendentes() {
    return this.tarefas.filter(t => !t.concluida);
  }

  getTarefasConcluidas() {
    return this.tarefas.filter(t => t.concluida);
  }
}
