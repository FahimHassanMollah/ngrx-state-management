import { createFeatureSelector, createSelector } from "@ngrx/store";

export const loginFeatureSelector = createFeatureSelector<IPostState>('login');

export const posts = createSelector(loginFeatureSelector,(state) => {
    console.log(state);
    return state.posts;
})

export const post = createSelector(loginFeatureSelector,(state) => {
    return state.post;
})

