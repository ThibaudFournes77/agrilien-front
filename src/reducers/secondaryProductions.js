import { SAVE_SECONDARY_PRODUCTIONS_REQUEST, SAVE_SECONDARY_PRODUCTIONS_SUCCESS, SAVE_SECONDARY_PRODUCTIONS_FAIL } from 'src/actions/secondaryProductions';

export const initialState = {
  list: [],
  labels: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SECONDARY_PRODUCTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_SECONDARY_PRODUCTIONS_SUCCESS:
      return {
        ...state,
        list: action.secondaryProductions,
        labels: action.labels,
        loading: false,
      };
    case SAVE_SECONDARY_PRODUCTIONS_FAIL:
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
