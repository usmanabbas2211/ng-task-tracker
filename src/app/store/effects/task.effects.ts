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

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
