import { CHANGE_FIELD, LOGIN, FAIL_LOGIN, SET_USER, IS_LOGGED, UNSET_USER } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  error: '',
  isLogged: false,
  username: 'Mon compte',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case FAIL_LOGIN:
      return {
        ...state,
        error: action.error.data.message,
      };
    case SET_USER:
      return {
        ...state,
        username: action.username,
        isLogged: true,
      };
    case LOGIN:
      return {
        ...state,
        info: {},
      };
    case IS_LOGGED:
      return {
        ...state,
      };
    case UNSET_USER:
      localStorage.clear();
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default user;
