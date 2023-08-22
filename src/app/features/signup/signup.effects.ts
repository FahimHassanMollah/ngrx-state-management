import { SignupService } from './../../services/signup/signup.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setErrorMessage, setLoading } from '../shared/shared.action';
import { Router } from '@angular/router';
import { signupStart, signupSuccess } from './signup.actions';

@Injectable()
export class SignupEffects {
    constructor(
        private actions$: Actions,
        private signupService: SignupService,
        private store: Store,
        private router: Router
    ) { }

    signupEffectHandler$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signupStart),
            mergeMap((action) => {
                return this.signupService.signUp(action.email, action.password).pipe(
                    map((data) => {
                        console.log(data, 'data => after api call in effect');
                        this.store.dispatch(setErrorMessage({ errorMessage: null }));
                        this.store.dispatch(setLoading({ loading: false }));
                        return signupSuccess({ user: data });
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

    signupRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signupSuccess),
            tap((action) => {
                this.router.navigate(['/login']);
            })
        ),
        { dispatch: false }
    );
}
