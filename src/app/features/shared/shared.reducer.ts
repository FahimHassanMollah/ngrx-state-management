
import { createReducer, on } from "@ngrx/store";
import { initialState } from './shared.state';
import { setLoading } from "./shared.action";






export const sharedReducer = createReducer(initialState,
    on(setLoading,(state,action)=> {

        return { ...state, loading: action.loading}
    }),
);