import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login/login.service';
import { loginStart, loginSuccess } from './login.actions';

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private loginService: LoginService) { }

    loginEffectHandler$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                return this.loginService.login(action.email, action.password).pipe(
                    map((data) => {
                        console.log(data);
                        return loginSuccess({ user: data } );
                    }),
                    catchError(() => EMPTY)
                );
            })
        )
    );
}
