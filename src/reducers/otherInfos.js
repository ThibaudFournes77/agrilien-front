import { SAVE_OTHER_INFOS_REQUEST, SAVE_OTHER_INFOS_SUCCESS, SAVE_OTHER_INFOS_FAIL } from 'src/actions/otherInfos';

export const initialState = {
  list: [],
  labels: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_OTHER_INFOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_OTHER_INFOS_SUCCESS:
      return {
        ...state,
        list: action.otherInfos,
        labels: action.labels,
        loading: false,
      };
    case SAVE_OTHER_INFOS_FAIL:
      return {
        ...state,
        error: action.message,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
