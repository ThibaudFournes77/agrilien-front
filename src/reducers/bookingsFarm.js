import {
  SAVE_BOOKINGS_REQUEST,
  SAVE_BOOKINGS_SUCCESS,
  SAVE_BOOKINGS_FAIL,
} from 'src/actions/bookingsFarm';

export const initialState = {
  list: [],
  loading: false,
  error: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOKINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_BOOKINGS_SUCCESS:
      console.log('reducer', action.bookings);
      return {
        ...state,
        list: action.bookings,
        loading: false,
      };
    case SAVE_BOOKINGS_FAIL:
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
