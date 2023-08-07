import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPost, IPostState } from "./post.model";

export const postsFeatureSelector = createFeatureSelector<IPostState>('posts');

export const posts = createSelector(postsFeatureSelector,(state) => {
    console.log(state);
    return state.posts;
})

export const post = createSelector(postsFeatureSelector,(state) => {
    return state.post;
})

