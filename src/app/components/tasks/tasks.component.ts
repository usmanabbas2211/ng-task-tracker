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
  taskToDelete: number = -1;

  storeData$: Observable<{
    tasks: ITask[];
    loading: boolean;
    addTaskLoading: boolean;
    toggleTaskLoading: number | null;
  }>;

  trackByTaskId(index: number, task: ITask): number {
    return task.id;
  }

  constructor(private store: Store<{ tasks: ITaskState }>) {
    this.storeData$ = store.pipe(
      select('tasks'),
      map((state: ITaskState) => ({
        tasks: [...state.tasks].sort((a, b) => b.id - a.id),
        loading: state.loading,
        addTaskLoading: state.addTaskLoading,
        toggleTaskLoading: state.toggleTaskLoading,
      }))
    );
  }

  ngOnInit(): void {
    this.store.dispatch(taskActions.getAllTaks());
  }

  deleteTask(id: number) {
    this.taskToDelete = id;
    this.store.dispatch(taskActions.deleteTask({ id }));
  }

  addTask(task: Omit<ITask, 'id'>) {
    this.taskToDelete = -1;
    this.store.dispatch(taskActions.addTask({ task }));
  }

  toggleTask(id: number, reminder: boolean) {
    this.store.dispatch(taskActions.toggleReminder({ id, reminder }));
  }
}
