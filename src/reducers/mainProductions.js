import { SAVE_MAIN_PRODUCTIONS_REQUEST, SAVE_MAIN_PRODUCTIONS_SUCCESS, SAVE_MAIN_PRODUCTIONS_FAIL } from 'src/actions/mainProductions';

export const initialState = {
  list: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MAIN_PRODUCTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_MAIN_PRODUCTIONS_SUCCESS:
      return {
        ...state,
        list: action.productions,
        loading: false,
      };
    case SAVE_MAIN_PRODUCTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
