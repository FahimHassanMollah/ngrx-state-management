//wtite a sime effect class here 
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';
// import { LoginService } from 'src/app/services/login/login.service';
//
// @Injectable()
// export class LoginEffects {
//  
//   loadLogins$ = createEffect(() => this.actions$.pipe(
//     ofType('[Login] Load Logins'),
//     mergeMap(() => this.loginService.login()
//       .pipe(
//         map(logins => ({ type: '[Login] Load Logins Success', payload: logins })),
//         catchError(() => EMPTY)
//       ))
//     )    
//   );
//
//   constructor(
//     private actions$: Actions,
//     private loginService: LoginService
//   ) {}
//
// }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login/login.service';
import { loginStart } from './login.actions';

@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ) { }


    loadLogins$ = createEffect(() => this.actions$.pipe(
        ofType(loginStart),
        mergeMap(() => this.loginService.login('','')
            .pipe(
                map(logins => ({ type: '[Login] Load Logins Success', payload: logins })),
                catchError(() => EMPTY)
            ))
    )
    );


}
