import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tarefas'; // URL da API

  constructor(private http: HttpClient) {}

  filtrarTasks(titulo: string, responsavel: string, numero: number | null, situacao: string): Observable<Task[]> {

    let params: any = { titulo, responsavel, numero, situacao };
    return this.http.get<Task[]>(this.apiUrl, { params });
  }

  salvarTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  deletarTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  buscarPorId(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  atualizarTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
}
