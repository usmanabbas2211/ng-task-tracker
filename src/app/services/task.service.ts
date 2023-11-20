import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from '../types/task.types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = '/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<number> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<number>(url);
  }

  addTask(task: Omit<ITask, 'id'>): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task, httpOptions);
  }

  toggleReminder(task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.patch<ITask>(
      url,
      { reminder: !task.reminder },
      httpOptions
    );
  }
}
