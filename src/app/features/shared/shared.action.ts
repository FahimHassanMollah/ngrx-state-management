import { createAction, props } from "@ngrx/store";

export const setLoading = createAction('[Shared] SET_LOADING', props<{loading:boolean}>());
