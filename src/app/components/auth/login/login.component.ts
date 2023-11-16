import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { login } from '../../../store/actions/auth.actions';
import { IUser } from '../../../types/user.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private store: Store<{ user: IUser }>) {}
  handleSubmit() {
    this.store.dispatch(login({ email: this.email, password: this.password }));
  }
}
