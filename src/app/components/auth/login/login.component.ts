import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';

import { login } from '../../../store/actions/auth.actions';
import { AuthState } from '../../../types/auth.types';
import Validation from '../../../utils/validation.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;
  email: string = '';
  password: string = '';

  loading$: Observable<boolean>;
  error$: Observable<string | unknown>;

  constructor(
    private store: Store<{ auth: AuthState }>,
    private fb: FormBuilder
  ) {
    this.loading$ = this.store.pipe(
      select('auth'),
      map((state: AuthState) => state.loading)
    );
    this.error$ = this.store.pipe(
      select('auth'),
      map((state: AuthState) => state.error)
    );
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
      },
      {
        // validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }
  handleSubmit() {
    this.store.dispatch(login({ email: this.email, password: this.password }));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
