import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from 'src/app/features/login/login.actions';
import { setLoading } from 'src/app/features/shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  loginHandler(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.store.dispatch(setLoading({ loading: true }));
    this.store.dispatch(loginStart({ email: this.loginForm.value.email, password: this.loginForm.value.password }));

  }
}
