import { createReducer, on, Action } from '@ngrx/store';
import { produce } from 'immer';

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
  on(taskAction.getAllTaks, (state) =>
    produce(state, (draft: ITaskState) => {
      draft.loading = true;
    })
  ),
  on(taskAction.getAllTaksSuccess, (state, { tasks }) =>
    produce(state, (draft: ITaskState) => {
      draft.loading = false;
      draft.tasks = tasks;
    })
  ),
  on(taskAction.getAllTaksFailure, (state, { error }) =>
    produce(state, (draft: ITaskState) => {
      draft.loading = false;
      draft.error = error;
    })
  ),
  on(taskAction.addTask, (state) =>
    produce(state, (draft: ITaskState) => {
      draft.addTaskLoading = true;
    })
  ),
  on(taskAction.addTaskSuccess, (state, { task }) =>
    produce(state, (draft: ITaskState) => {
      draft.addTaskLoading = false;
      draft.tasks.unshift(task);
    })
  ),
  on(taskAction.addTaskFailure, (state, { error }) =>
    produce(state, (draft: ITaskState) => {
      draft.addTaskLoading = false;
      draft.error = error;
    })
  ),
  on(taskAction.deleteTask, (state) =>
    produce(state, (draftState: ITaskState) => {
      draftState.deleteTaskLoading = true;
    })
  ),
  on(taskAction.deleteTaskSuccess, (state, { id }) =>
    produce(state, (draftState: ITaskState) => {
      draftState.deleteTaskLoading = false;
      draftState.tasks = draftState.tasks.filter((t: ITask) => t.id !== id);
    })
  ),
  on(taskAction.deleteTaskFailure, (state, { error }) =>
    produce(state, (draftState: ITaskState) => {
      draftState.deleteTaskLoading = false;
      draftState.error = error;
    })
  )
);

export function taskReducer(
  state: ITaskState | undefined,
  action: Action
): ITaskState {
  return _taskReducer(state, action);
}
