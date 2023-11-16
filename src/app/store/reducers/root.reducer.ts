import { authReducer } from './auth.reducer';
import { counterReducer } from './counter.reducer';

export const rootReducer = { count: counterReducer, auth: authReducer };
