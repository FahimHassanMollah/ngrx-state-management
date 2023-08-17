import { createAction, props } from "@ngrx/store";

export const setLoading = createAction('[Shared] SET_LOADING', props<{loading:boolean}>());
export const setErrorMessage = createAction('[Shared] SET_ERROR_MESSAGE', props<{errorMessage:string | null}>());
