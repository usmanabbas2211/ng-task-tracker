import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import * as AuthActions from '../../../store/actions/auth.actions';

import { login } from '../../../store/actions/auth.actions';
import { AuthState } from '../../../types/auth.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loading$: Observable<boolean>;
  error$: Observable<string | unknown>;

  constructor(private store: Store<{ auth: AuthState }>) {
    this.loading$ = this.store.pipe(
      select('auth'),
      map((state: AuthState) => state.loading)
    );
    this.error$ = this.store.pipe(
      select('auth'),
      map((state: AuthState) => state.error)
    );
  }
  handleSubmit() {
    this.store.dispatch(login({ email: this.email, password: this.password }));
  }
}
