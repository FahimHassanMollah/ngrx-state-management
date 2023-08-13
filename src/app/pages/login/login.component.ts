import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      email: ['',[ Validators.required,Validators.email]],
      password: ['',[ Validators.required,Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email')}
  get password() { return this.loginForm.get('password')}

  loginHandler() : void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }
}
