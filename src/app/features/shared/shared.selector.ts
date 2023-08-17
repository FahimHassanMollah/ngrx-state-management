import { ISharedState } from './shared.model';
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const sharedFeatureSelector = createFeatureSelector<ISharedState>('shared');

export const loading = createSelector(sharedFeatureSelector,(state) => {
    return state.loading;
})

export const selectErrorMessage = createSelector(sharedFeatureSelector,(state) => {
    return state.errorMessage;
})


