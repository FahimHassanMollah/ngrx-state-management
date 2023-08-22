import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILoginState } from "./login.model";

export const loginFeatureSelector = createFeatureSelector<ILoginState>('login');

export const isauthenticatedSelector = createSelector(loginFeatureSelector,(state) => {
    return state.user !== null;
})



