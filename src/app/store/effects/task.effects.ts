import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { TaskService } from '../../services/task.service';
import * as taskaction from '../../store/actions/task.actions';

@Injectable()
export class TaskEffects {
  getAllTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taskaction.getAllTaks),
      switchMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => taskaction.getAllTaksSuccess({ tasks })),
          catchError((error) => of(taskaction.getAllTaksFailure({ error })))
        )
      )
    );
  });

  addTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taskaction.addTask),
      switchMap((action) =>
        this.taskService.addTask(action.task).pipe(
          map((task) => taskaction.addTaskSuccess({ task })),
          catchError((error) => of(taskaction.getAllTaksFailure({ error })))
        )
      )
    );
  });

  updateTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taskaction.deleteTask),
      switchMap((action) =>
        this.taskService.deleteTask(action.id).pipe(
          map(() => taskaction.deleteTaskSuccess({ id: action.id })),
          catchError((error) => of(taskaction.getAllTaksFailure({ error })))
        )
      )
    );
  });

  toggleReminder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taskaction.toggleReminder),
      switchMap((action) =>
        this.taskService.toggleReminder(action.id, action.reminder).pipe(
          map((response) =>
            taskaction.toggleReminderSuccess({ task: response })
          ),
          catchError((error) => of(taskaction.toggleReminderFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
