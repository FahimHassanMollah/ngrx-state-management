import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm! : FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { 
    this.signUpForm = this.fb.group({
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }
}
