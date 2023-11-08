import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tasks as defaultTasks, ITask } from '../../mock-taks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    // const tasks = of(defaultTasks);
    // return tasks;

    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<number> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<number>(url);
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
