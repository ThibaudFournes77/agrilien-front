import { INPUT_VALUE_CHANGE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from 'src/actions/users';

export const initialState = {
  email: '',
  password: '',
  userInfos: localStorage.getItem('userInfos') ? JSON.parse(localStorage.getItem('userInfos')) : null,
  loading: false,
  error: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_VALUE_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfos: action.userInfos,
        email: '',
        password: '',
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default reducer;
