import { createReducer, on } from "@ngrx/store";
import { initialState } from "./login.state";

export const loginReducer = createReducer(initialState)