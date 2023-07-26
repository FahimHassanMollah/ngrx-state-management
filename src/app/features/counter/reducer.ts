import { increment, decrement, reset } from './action';
import { createReducer, on } from "@ngrx/store";
import { initialState } from './state';
import { ICounter } from './model';




export const counterReducer = createReducer(initialState,
    on(increment, state => {
        return { ...state, counter: state.counter + 1 }
    }),
    on(decrement, state => {
        return { ...state, counter: state.counter - 1 }
    }),
    on(reset, state => {
        return { ...state, counter: 0 }
    }),
);