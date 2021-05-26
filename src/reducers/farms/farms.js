import { SAVE_FARMS, STOP_LOADING_FARMS } from 'src/actions/farms';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FARMS:
      return {
        ...state,
        list: action.farms,
      };
    case STOP_LOADING_FARMS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
