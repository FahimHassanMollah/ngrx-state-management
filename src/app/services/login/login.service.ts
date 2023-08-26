import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutStart } from 'src/app/features/login/login.actions';
import { ILoggedInUser } from 'src/app/features/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private timeOut: any = null;
  constructor(
    private http: HttpClient, private router: Router,
    private store : Store
  ) { }
  // apiKey: "AIzaSyBi9cb-yb_8aJuRO1E9LkU1HWPj1eSMB84",
  login(email: string, password: string): Observable<ILoggedInUser> {
    return this.http.post<ILoggedInUser>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBi9cb-yb_8aJuRO1E9LkU1HWPj1eSMB84', { email, password, returnSecureToken: true });
  }
  saveUserInLocalStorage(user: ILoggedInUser) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }
  getUserFromLocalStorage(): ILoggedInUser | null {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
  }
  autoLogout(user: ILoggedInUser) {

    const expiresIn = parseFloat(user.expiresIn);
    const expirationTimestamp =  expiresIn * 1000; // Convert expiresIn to milliseconds
    this.removeTimer();
    this.timeOut = setTimeout(() => {
      this.store.dispatch(logoutStart());
    }, expirationTimestamp);

  }
  removeTimer() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
      this.timeOut = null;
    }
  }
 
 
}
