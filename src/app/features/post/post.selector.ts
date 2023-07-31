import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounter } from "./post.model";

export const counterFeatureSelector = createFeatureSelector<ICounter>('counter');

export const counter = createSelector(counterFeatureSelector,(state:ICounter) => {
    console.log(state);
    
    return state.counter;
})