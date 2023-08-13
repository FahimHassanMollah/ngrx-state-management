import { postReducer } from "../features/post/post.reducer";
import { counterReducer } from '../features/counter/reducer';
import { loginReducer } from "../features/login/login.reducer";

export const appReducer  = {
    posts: postReducer,
    counter: counterReducer,
    login : loginReducer
}