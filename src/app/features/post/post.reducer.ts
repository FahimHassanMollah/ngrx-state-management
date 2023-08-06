import { addPost, getPosts } from './post.action';
import { createReducer, on } from "@ngrx/store";
import { initialState } from './post.state';





export const postReducer = createReducer(initialState,
    on(getPosts,(state,action)=> {
        console.log(action);
        return { ...state}
    }),
    on(addPost, (state,action)=> {
        return { ...state, posts: [...state.posts, action.post]}
    })
    
);