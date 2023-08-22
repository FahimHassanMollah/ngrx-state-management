import { createAction, props } from "@ngrx/store";
import { ILoggedInUser } from "../login/login.model";

export const signupStart = createAction('[Signup] Signup Start', props<{ email: string, password: string }>());
export const signupSuccess = createAction('[Signup] Signup Success', props<{ user: ILoggedInUser}>());
export const signupFail = createAction('[Signup] Signup Fail', props<{ errorMessage: string }>());
