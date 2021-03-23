import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../../types/types';

export const getUser = createAction(
  '[User] Get User',
  props<UserInterface>()
);

export const saveUser = createAction(
  '[User] Save User',
  props<UserInterface>()
)
