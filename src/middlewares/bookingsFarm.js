import {
  LOAD_BOOKINGS,
  saveBookingsRequest,
  saveBookingsSuccess,
  saveBookingsFail,
} from '../actions/bookingsFarm';
import api from '../api';

const bookingsFarm = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:
      store.dispatch(saveBookingsRequest());
      api.get(`bookings/farm/${action.id}`)
        .then((response) => {
          console.log('response api bookingsFarm', response.data.bookingsFarm);
          store.dispatch(saveBookingsSuccess(response.data.bookingsFarm));
        })
        .catch((error) => store.dispatch(saveBookingsFail(error)));
      break;
    default:
      next(action);
  }
};

export default bookingsFarm;
