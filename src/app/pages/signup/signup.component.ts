import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoading } from 'src/app/features/shared/shared.action';
import { signupStart } from 'src/app/features/signup/signup.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.passwordMatchValidator() });
  }
  get email() { return this.signUpForm.get('email') }
  get password() { return this.signUpForm.get('password') }
  get confirmPassword() { return this.signUpForm.get('confirmPassword') }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordControl = control.get('password');
      const confirmPasswordControl = control.get('confirmPassword');

      if (passwordControl?.value && confirmPasswordControl?.value && confirmPasswordControl?.errors === null && passwordControl?.value !== confirmPasswordControl?.value) {
        confirmPasswordControl?.setErrors({ passwordMismatch: true });
      }
      if (passwordControl?.value && confirmPasswordControl?.value && passwordControl?.value === confirmPasswordControl?.value) {
        confirmPasswordControl?.setErrors(null);
      }
      return null;
    };
  }
  singUpFormSubmitHandler() {
    if (this.signUpForm.invalid) {
      return;
    }
    this.store.dispatch(setLoading({ loading: true }));
    this.store.dispatch(signupStart({ email: this.signUpForm.value.email, password: this.signUpForm.value.password }));
    console.log(this.signUpForm.value);
  }
}
