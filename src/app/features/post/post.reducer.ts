import { getPosts } from './post.action';
import { createReducer, on } from "@ngrx/store";
import { initialState } from './post.state';
import { IPosts } from './post.model';




export const postReducer = createReducer(initialState,
    on(getPosts,(state,action)=> {
        console.log(action);
        return { ...state}
    }),
    // on(decrement, state => {
    //     return { ...state }
    // }),
    // on(reset, state => {
    //     return { ...state}
    // }),
);