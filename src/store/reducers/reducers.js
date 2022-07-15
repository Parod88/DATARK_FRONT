import { createReducer } from '@reduxjs/toolkit';
import { loginSuccess, logoutInitiate } from '../actions';

export const defaultState = {
  auth: false,
  userData: null,
  publicUser: {
    loaded: false,
    data: null,
  },
  forgotPass: {
    isForgotten: false,
    data: null,
  },
  adverts: {
    loaded: false,
    data: [],
  },
  categories: [],
  tags: [],
  ui: {
    isLoading: false,
    error: null,
  },
};

export const auth = createReducer(defaultState.auth, (builder) => {
  builder
    .addCase(loginSuccess, () => true)
    .addCase(logoutInitiate, () => false);
});
