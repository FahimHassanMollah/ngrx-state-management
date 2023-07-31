import { createAction, props } from "@ngrx/store";
import { IPost } from "./post.model";



export const getPosts = createAction('[Post] GET_POST');
// export const getPosts = createAction('[Post] GET_POST', props<{post:IPost}>());