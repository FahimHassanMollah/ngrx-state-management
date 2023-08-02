import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPost, IPosts } from "./post.model";

export const postsSelector = createFeatureSelector<IPosts>('posts');

export const posts = createSelector(postsSelector,(state) => {
    console.log(state);
    return state.posts;
})