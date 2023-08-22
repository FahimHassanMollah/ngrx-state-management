import { createReducer, on } from "@ngrx/store";
import { signupSuccess } from "./signup.actions";
import { initialState } from "./signup.state";

export const signupReducer = createReducer(initialState,on(signupSuccess, (state,action) => {
    return { ...state, user: action.user};
}))