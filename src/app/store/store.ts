import { postReducer } from "../features/post/post.reducer";
import { counterReducer } from '../features/counter/reducer';

export const appReducer  = {
    posts: postReducer,
    counter: counterReducer
}