import { createReducer, on } from "@ngrx/store";
import { initialState } from "./login.state";
import { logOutSuccess, loginSuccess } from "./login.actions";

export const loginReducer = createReducer(initialState,
    on(loginSuccess, (state, action) => {
        return { ...state, user: action.user };
    }),
    on(logOutSuccess, (state, action) => {
        return { ...state, user: null };
    })
    
    );
