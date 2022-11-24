import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from '../types';
import { createAction } from '@reduxjs/toolkit';

const errorPrepareAction = (error) => ({
  payload: error,
  error: true,
});

export const loginStart = createAction(LOGIN_START);

export const loginSuccess = createAction(LOGIN_SUCCESS);

export const loginFailure = createAction(LOGIN_FAILURE, errorPrepareAction);

export const logoutInitiate = createAction(LOGOUT_USER);

export function loginInitiate(credentials) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(loginStart());
    try {
      await api.users.login(credentials);

      dispatch(loginSuccess());
      const { from } = history.location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
}
