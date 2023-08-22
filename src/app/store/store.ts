import { postReducer } from "../features/post/post.reducer";
import { counterReducer } from '../features/counter/reducer';
import { loginReducer } from "../features/login/login.reducer";
import { sharedReducer } from "../features/shared/shared.reducer";
import { signupReducer } from "../features/signup/signup.reducer";

export const appReducer  = {
    posts: postReducer,
    counter: counterReducer,
    login : loginReducer,
    signup : signupReducer,
    shared: sharedReducer
}