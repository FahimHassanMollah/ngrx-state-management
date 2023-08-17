import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login/login.service';
import { loginStart, loginSuccess } from './login.actions';
import { Store } from '@ngrx/store';
import { setErrorMessage, setLoading } from '../shared/shared.action';

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private loginService: LoginService,private store:Store) { }

    loginEffectHandler$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                return this.loginService.login(action.email, action.password).pipe(
                    map((data) => {
                        console.log(data,'data => after api call in effect');
                        this.store.dispatch(setErrorMessage({errorMessage:null}));
                        this.store.dispatch(setLoading({loading:false}));
                        return loginSuccess({ user: data } );
                    }),
                    catchError((error) => {
                        this.store.dispatch(setLoading({loading:false}));
                        console.log(error);
                        return of(setErrorMessage({errorMessage:error?.error?.error?.message?? 'Something went wrong'}));

                        // this.store.dispatch(setErrorMessage({errorMessage:error?.error?.message ?? 'Something went wrong'}));
                        // return EMPTY;
                    })
                );
            })
        )
    );
}
