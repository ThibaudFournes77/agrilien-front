export const TOGGLE_SETTINGS_FORM = 'TOGGLE_SETTINGS_FORM';
export const INPUT_VALUE_CHANGE = 'INPUT_VALUE_CHANGE';
export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const inputValueChange = (name, value) => ({
  type: INPUT_VALUE_CHANGE,
  name,
  value,
});

export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userInfos) => ({
  type: LOGIN_SUCCESS,
  userInfos,
});

export const loginFail = (message) => ({
  type: LOGIN_FAIL,
  message,
});

export const logout= () => ({
  type: LOGOUT,
});
