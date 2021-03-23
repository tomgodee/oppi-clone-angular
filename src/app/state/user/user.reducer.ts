import { createReducer, on, Action } from '@ngrx/store';

import { getUser, saveUser } from './user.actions';
import { UserInterface } from '../../../types/types';

export const initialState: UserInterface = {} as UserInterface;

export const userReducer = createReducer(
  initialState,
  on(getUser, (state, user) => ({ ...state, user })),
  on(saveUser, (state, user) => {
    return { ...state, user }
  }),
);
