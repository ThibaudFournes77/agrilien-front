import {
// SAVE_FARM,
// STOP_LOADING_FARM,
  SAVE_FARM_REQUEST,
  SAVE_FARM_SUCCESS,
  SAVE_FARM_FAIL,
} from 'src/actions/farm';

export const initialState = {
  list: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FARM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_FARM_SUCCESS:
      return {
        ...state,
        list: action.farm,
        loading: false,
      };
    case SAVE_FARM_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
