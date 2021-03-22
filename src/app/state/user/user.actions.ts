import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../../types/types';

export const getUser = createAction(
  '[User] Get User',
  props<{ user: UserInterface }>()
);
