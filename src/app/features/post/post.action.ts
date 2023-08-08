import { createAction, props } from "@ngrx/store";
import { IPost } from "./post.model";



export const getPosts = createAction('[Post] GET_POST');
export const addPost = createAction('[Post] ADD_POST', props<{post:IPost}>());
export const getPost = createAction('[Post] GET_POST', props<{id:Number}>());
export const updatePost = createAction('[Post] UPDATE_POST', props<{post:IPost}>());
export const deletePost = createAction('[Post] DELETE_POST', props<{id:Number}>());
// export const getPosts = createAction('[Post] GET_POST', props<{post:IPost}>());