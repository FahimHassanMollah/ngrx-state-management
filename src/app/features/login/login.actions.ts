import { createAction, props } from "@ngrx/store";
import { ILoggedInUser } from "./login.model";

export const loginStart = createAction('[Login] Login Start', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Login] Login Success', props<{ user: ILoggedInUser}>());
export const loginFail = createAction('[Login] Login Fail', props<{ errorMessage: string }>());
