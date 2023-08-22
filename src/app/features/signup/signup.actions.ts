import { createAction, props } from "@ngrx/store";;
import { ISignupUser } from "./signup.model";

export const signupStart = createAction('[Signup] Signup Start', props<{ email: string, password: string }>());
export const signupSuccess = createAction('[Signup] Signup Success', props<{ user: ISignupUser}>());
export const signupFail = createAction('[Signup] Signup Fail', props<{ errorMessage: string }>());
