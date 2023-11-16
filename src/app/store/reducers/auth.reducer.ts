import { createReducer, on } from '@ngrx/store';
import { login } from '../actions/auth.actions';
import { IUser } from '../../types/user.type';

export const initialState: { user: IUser | null } = {
  user: null,
};

const _authReducer = createReducer(
  initialState,
  on(login, (state) => {
    console.log('state==>', state);
    return state;
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
