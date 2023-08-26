import { ILoggedInUser } from 'src/app/features/login/login.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login/login.service';
import {
    autoLogin,
    logOutSuccess,
    loginStart,
    loginSuccess,
    logoutStart,
} from './login.actions';
import { Store } from '@ngrx/store';
import { setErrorMessage, setLoading } from '../shared/shared.action';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private store: Store,
        private router: Router
    ) { }

    loginEffectHandler$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                return this.loginService.login(action.email, action.password).pipe(
                    map((data) => {
                        console.log(data, 'data => after api call in effect');
                        this.store.dispatch(setErrorMessage({ errorMessage: null }));
                        this.store.dispatch(setLoading({ loading: false }));
                        this.loginService.saveUserInLocalStorage(data);
                        this.loginService.autoLogout(data);
                        return loginSuccess({ user: data });
                    }),
                    catchError((error) => {
                        this.store.dispatch(setLoading({ loading: false }));
                        console.log(error);
                        return of(
                            setErrorMessage({
                                errorMessage:
                                    error?.error?.error?.message ?? 'Something went wrong',
                            })
                        );

                        // this.store.dispatch(setErrorMessage({errorMessage:error?.error?.message ?? 'Something went wrong'}));
                        // return EMPTY;
                    })
                );
            })
        )
    );

    loginRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                this.router.navigate(['/posts']);
            })
        ),
        { dispatch: false }
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logoutStart),
            map((action) => {
                localStorage.removeItem('loggedInUser');
                this.router.navigate(['/login']);
                this.loginService.removeTimer();
                return logOutSuccess();
            })
        )
    );

    autoLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(autoLogin),
            switchMap(() => {
                const user = this.loginService.getUserFromLocalStorage();
                if (user) {
                    this.loginService.autoLogout(user);
                    return of(loginSuccess({ user }));
                }
                return EMPTY;
            })
        )
    );
}
