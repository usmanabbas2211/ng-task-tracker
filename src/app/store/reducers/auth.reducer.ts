import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthState } from '../../types/auth.types';

export const initialState: AuthState = {
  loading: false,
  email: null,
  token: null,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginSuccess, (state, { token, email }) => ({
    ...state,
    token,
    email,
    loading: false,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return _authReducer(state, action);
}
