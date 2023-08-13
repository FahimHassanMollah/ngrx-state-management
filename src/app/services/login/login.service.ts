import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoggedInUser } from 'src/app/features/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  // apiKey: "AIzaSyBi9cb-yb_8aJuRO1E9LkU1HWPj1eSMB84",
  login (email:string,password:string) : Observable<ILoggedInUser> {
    return this.http.post<ILoggedInUser>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBi9cb-yb_8aJuRO1E9LkU1HWPj1eSMB84',{email,password,returnSecureToken:true});
  }
}
