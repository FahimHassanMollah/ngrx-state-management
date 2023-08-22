import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignupUser } from 'src/app/features/signup/signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  signUp(email: string, password: string) : Observable<ISignupUser> {
    return this.http.post<ISignupUser>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBi9cb-yb_8aJuRO1E9LkU1HWPj1eSMB84', {
      email,
      password,
      returnSecureToken: true
    })
  }
}
