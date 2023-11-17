import { props, createAction } from '@ngrx/store';
import { ITask } from '../../types/task.types';

export const getAllTaks = createAction('[taks] getAllTaks');
export const getAllTaksSuccess = createAction(
  '[taks] getAllTaks success',
  props<{ tasks: ITask[] }>()
);
export const getAllTaksFailure = createAction(
  '[taks] getAllTaks failure',
  props<{ error: unknown }>()
);

export const addTask = createAction(
  '[tasks] add task',
  props<Omit<ITask, 'id'>>()
);

export const addTaskSuccess = createAction(
  '[tasks] add task success',
  props<ITask>()
);

export const addTaskFailure = createAction(
  '[tasks] add task failure',
  props<{ error: unknown }>()
);
