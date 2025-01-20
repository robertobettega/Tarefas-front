import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tarefas = [
    { id: 1, titulo: 'Finalizar relatório', responsavel: 'João' },
    { id: 2, titulo: 'Reunião com cliente', responsavel: 'Maria' },
    { id: 3, titulo: 'Revisar proposta', responsavel: 'Pedro' }
  ];

  editarTarefa(id: number) {
    console.log(`Editar tarefa com ID: ${id}`);
    // Adicione aqui a lógica para editar a tarefa
  }

  excluirTarefa(id: number) {
    console.log(`Excluir tarefa com ID: ${id}`);
    // Adicione aqui a lógica para excluir a tarefa
  }

  concluirTarefa(id: number) {
    console.log(`Concluir tarefa com ID: ${id}`);
    // Adicione aqui a lógica para concluir a tarefa
  }
}
