import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { Situacao } from '../../models/situacao.enum';
import { CommonModule } from '@angular/common';
import { prioridade } from '../../models/prioridade.enum';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class TaskComponent implements OnInit {
  task: Task = new Task();
  filtroTitulo: string = '';
  filtroResponsavel: string = '';
  filtroNumero: number | null = null;
  filtroSituacao: string = '';

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.buscarTasks();
  }

  criarNovaTask(): void {
    this.task = new Task();
    this.task.id = 0;
    this.task.titulo = '';
    this.task.descricao = '';
    this.task.responsavel = '';
    this.task.situacao = Situacao.EM_ANDAMENTO;
    this.task.prioridade = prioridade.MEDIA;
    this.task.dataConclusao = undefined; 
  }
  

  buscarTasks(): void {
    this.taskService.filtrarTasks(this.filtroTitulo, this.filtroResponsavel, this.filtroNumero, this.filtroSituacao)
      .subscribe(tasks => this.tasks = tasks);
  }

  salvarTask(): void {
    this.taskService.salvarTask(this.task)
      .subscribe({
        next: () => {
          this.task = new Task();
          alert('Tarefa salva com sucesso!');
          this.buscarTasks();
        },
        error: (err) => alert(err.message)
      });
  }

  removerTask(id: number): void {
    this.taskService.deletarTask(id)
      .subscribe({
        next: () => {
          alert(`Tarefa ${id} removida com sucesso.`);
          this.buscarTasks();
        },
        error: (err) => alert(err.message)
      });
  }

  editarTask(id: number): void {
    this.taskService.buscarPorId(id)
      .subscribe(task => this.task = task);
  }

  concluirTask(task: Task): void {
    if (task.situacao !== Situacao.CONCLUIDA) {
      task.situacao = Situacao.CONCLUIDA;
      task.dataConclusao = new Date();
      this.taskService.atualizarTask(task)
        .subscribe({
          next: () => {
            alert(`Tarefa ${task.id} concluída com sucesso!`);
            this.buscarTasks();
          },
          error: (err) => alert(err.message)
        });
    }
  }
}
