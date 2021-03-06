export const SUBMIT_PROFILE = 'SUBMIT_PROFILE';
export const CHANGE_PROFILE = 'CHANGE_PROFILE';
export const SUBMIT_PASSWORD = 'SUBMIT_PASSWORD';
export const ERROR_PROFILE = 'ERROR_PROFILE';
export const GET_VALIDATION = 'GET_VALIDATION';
export const ERROR_SUBSCRIPTION = 'ERROR_SUBSCRIPTION';
export const GET_VALIDATION_PROFILE = 'GET_VALIDATION_PROFILE';
export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';

export const setData = (data) => ({
  type: SET_DATA,
  data,
});

export const getData = () => ({
  type: GET_DATA,
});

export const errorProfile = (value) => ({
  type: ERROR_PROFILE,
  value,
});

export const errorSubscription = (value) => ({
  type: ERROR_SUBSCRIPTION,
  value,
});

export const submitProfile = () => ({
  type: SUBMIT_PROFILE,
});

export const changeProfile = (name, value) => ({
  type: CHANGE_PROFILE,
  name,
  value,
});

export const submitPassword = () => ({
  type: SUBMIT_PASSWORD,
});

export const getValidation = (value) => ({
  type: GET_VALIDATION,
  value,
});

export const getValidationProfile = (value) => ({
  type: GET_VALIDATION_PROFILE,
  value,
});
