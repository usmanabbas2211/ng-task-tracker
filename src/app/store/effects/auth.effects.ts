import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  delay,
  map,
  switchMap,
  throttleTime,
} from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

import * as AuthActions from '../actions/auth.actions';
import { ILoginResponse } from '../../types/auth.types';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          // delay(1000),
          map((response: ILoginResponse) => {
            return AuthActions.loginSuccess({
              token: response.token,
              email: response.email,
            });
          }),
          catchError((error) => {
            return of(AuthActions.loginFailure({ error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
