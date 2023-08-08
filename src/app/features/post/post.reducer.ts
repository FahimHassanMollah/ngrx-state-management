import { addPost, deletePost, getPost, getPosts, updatePost } from './post.action';
import { createReducer, on } from "@ngrx/store";
import { initialState } from './post.state';
import { IPost } from './post.model';





export const postReducer = createReducer(initialState,
    on(getPosts,(state,action)=> {
        console.log(action);
        return { ...state}
    }),
    on(addPost, (state,action)=> {
        return { ...state, posts: [...state.posts, action.post]}
    }),
    on(getPost,(state,action)=> {
        const posts = JSON.parse(JSON.stringify(state.posts));
        const post = posts.find((post:IPost)=> post.id === action.id);  
        return { ...state, post: post}
    }),
    on(updatePost,(state,action)=> {
        const posts = JSON.parse(JSON.stringify(state.posts));
        const postIndex = posts.findIndex((post:IPost)=> post.id === action.post.id);  
        posts[postIndex] = action.post;
        return { ...state, posts: posts,post: action.post}
    }),
    on(deletePost, (state,action)=> {
        const posts = JSON.parse(JSON.stringify(state.posts)).filter((post:IPost)=> post.id !== action.id);
        return { ...state, posts: posts}
    })

);