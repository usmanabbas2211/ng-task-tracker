import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { increment, decrement, reset } from '../../store/actions';
import { CounterState } from '../../types/counter.type';

@Component({
  selector: 'app-counter-store',
  templateUrl: './counter-store.component.html',
  styleUrls: ['./counter-store.component.css'],
})
export class CounterStoreComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = store.pipe(
      select('count'),
      map((state: CounterState) => state.counter)
    );
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
