import { authReducer } from './auth.reducer';
import { counterReducer } from './counter.reducer';
import { taskReducer } from './task.reducer';

export const rootReducer = {
  count: counterReducer,
  auth: authReducer,
  tasks: taskReducer,
};
