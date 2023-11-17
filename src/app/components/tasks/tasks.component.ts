import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ITask, ITaskState } from '../../types/task.types';
import { TaskService } from '../../services/task.service';
import * as taskActions from '../../store/actions/task.actions';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(200),
      ]),

      transition(':leave', [
        animate('0.3s ease-in-out', style({ transform: 'translateX(-20px)' })),
        animate(
          '0.3s ease-in-out',
          style({ transform: 'translateX(20px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];
  storeTasks$: Observable<ITask[]>;

  trackByTaskId(index: number, task: ITask): number {
    return task.id;
  }

  constructor(
    private taskService: TaskService,
    private store: Store<{ tasks: ITaskState }>
  ) {
    this.storeTasks$ = store.pipe(
      select('tasks'),
      map((state: ITaskState) => {
        const sortedTasks = [...state.tasks];
        return sortedTasks.sort((a, b) => b.id - a.id);
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(taskActions.getAllTaks());
    this.storeTasks$.subscribe((tasks: ITask[]) => {});
  }

  deleteTask(id: number) {
    this.store.dispatch(taskActions.deleteTask({ id }));
  }

  addTask(task: Omit<ITask, 'id'>) {
    this.store.dispatch(taskActions.addTask({ task }));
  }

  toggleTask(task: ITask) {
    this.taskService.toggleReminder(task).subscribe((updatedTask) => {
      this.tasks = this.tasks.map((t: ITask) =>
        t.id !== task.id ? t : updatedTask
      );
    });
  }
}
