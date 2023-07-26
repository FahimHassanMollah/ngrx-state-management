import { increment, decrement, reset } from './action';
import { createReducer, on } from "@ngrx/store";
import { initialState } from './state';
import { ICounter } from './model';




export const counterReducer = createReducer(initialState,
    on(increment,(state,action)=> {
        console.log(action);
        return { ...state, counter: state.counter + action.value }
    }),
    on(decrement, state => {
        return { ...state, counter: state.counter - 1 }
    }),
    on(reset, state => {
        return { ...state, counter: 0 }
    }),
);