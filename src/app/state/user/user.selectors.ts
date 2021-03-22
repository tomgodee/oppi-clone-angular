import { createSelector } from '@ngrx/store';
import { AppState } from "../app.state";
import { UserInterface } from "../../../types/types";

export const selectUser = createSelector(
  (state: AppState) => state.user,
  (user: UserInterface) => user
);
