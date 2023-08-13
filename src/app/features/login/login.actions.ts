import { createAction, props } from "@ngrx/store";

export const loginStart = createAction('[Login] Login Start', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Login] Login Success', props<{ email: string, userId: string, token: string, expirationDate: Date }>());
export const loginFail = createAction('[Login] Login Fail', props<{ errorMessage: string }>());
