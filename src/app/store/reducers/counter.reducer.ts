import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
import { CounterState } from '../../types/counter.type';

export const initialState: CounterState = {
  counter: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, () => {
    return initialState;
  })
);

export function counterReducer(
  state: CounterState | undefined,
  action: Action
): CounterState {
  return _counterReducer(state as CounterState, action);
}
