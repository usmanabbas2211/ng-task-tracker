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
  props<{ task: Omit<ITask, 'id'> }>()
);

export const deleteTask = createAction(
  '[tasks] delete task',
  props<{ id: number }>()
);

export const deleteTaskSuccess = createAction(
  '[tasks] delete success',
  props<{ id: number }>()
);

export const deleteTaskFailure = createAction(
  '[tasks] delete failure',
  props<{ error: unknown }>()
);

export const addTaskSuccess = createAction(
  '[tasks] add task success',
  props<{ task: ITask }>()
);

export const addTaskFailure = createAction(
  '[tasks] add task failure',
  props<{ error: unknown }>()
);
