import { createReducer, on, Action } from '@ngrx/store';

import { getUser } from './user.actions';
import { UserInterface } from '../../../types/types';

export const initialState: UserInterface = {} as UserInterface;

export const userReducer = createReducer(
  initialState,
  on(getUser, (state, { user: UserInterface }) => ({ ...state, user: UserInterface }))
);