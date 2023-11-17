import { createReducer, on, Action } from '@ngrx/store';
import * as taskAction from '../actions/task.actions';
import { ITask, ITaskState } from '../../types/task.types';

export const initialState: ITaskState = {
  tasks: [],
  loading: false,
  addTaskLoading: false,
  deleteTaskLoading: false,
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
  })),
  on(taskAction.addTask, (state) => ({
    ...state,
    addTaskLoading: true,
  })),
  on(taskAction.addTaskSuccess, (state, { task }) => ({
    ...state,
    addTaskLoading: false,
    tasks: [task, ...state.tasks],
  })),
  on(taskAction.addTaskFailure, (state, { error }) => ({
    ...state,
    addTaskLoading: false,
    error,
  })),
  on(taskAction.deleteTask, (state) => ({
    ...state,
    deleteTaskLoading: true,
  })),
  on(taskAction.deleteTaskSuccess, (state, { id }) => ({
    ...state,
    deleteTaskLoading: false,
    tasks: state.tasks.filter((t: ITask) => t.id !== id),
  })),
  on(taskAction.deleteTaskFailure, (state, { error }) => ({
    ...state,
    deleteTaskLoading: false,
    error,
  }))
);

export function taskReducer(
  state: ITaskState | undefined,
  action: Action
): ITaskState {
  return _taskReducer(state, action);
}
