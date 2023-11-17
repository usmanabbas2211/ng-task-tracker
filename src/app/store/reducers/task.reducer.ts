import { createReducer, on, Action } from '@ngrx/store';
import * as taskAction from '../actions/task.actions';
import { ITask, ITaskState } from '../../types/task.types';

export const initialState: ITaskState = {
  tasks: [],
  loading: false,
  error: null,
};

const _taskReducer = createReducer(
  initialState,
  on(taskAction.getAllTaks, (state) => ({
    ...state,
    loading: true,
  })),
  on(taskAction.getAllTaksSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    tasks,
  })),
  on(taskAction.getAllTaksFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export function taskReducer(
  state: ITaskState | undefined,
  action: Action
): ITaskState {
  return _taskReducer(state, action);
}
