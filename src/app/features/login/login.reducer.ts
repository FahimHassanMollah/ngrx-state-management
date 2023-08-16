import { createReducer, on } from "@ngrx/store";
import { initialState } from "./login.state";
import { loginSuccess } from "./login.actions";

export const loginReducer = createReducer(initialState,on(loginSuccess, (state,action) => {
    return { ...state, user: action.user};
}))