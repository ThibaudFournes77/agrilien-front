export const LOAD_BOOKINGS = 'LOAD_BOOKINGS';
export const SAVE_BOOKINGS_REQUEST = 'SAVE_BOOKINGS_REQUEST';
export const SAVE_BOOKINGS_SUCCESS = 'SAVE_BOOKINGS_SUCCESS';
export const SAVE_BOOKINGS_FAIL = 'SAVE_BOOKINGS_FAIL';

export const loadBookings = (id) => ({
  type: LOAD_BOOKINGS,
  id,
});

export const saveBookingsRequest = () => ({
  type: SAVE_BOOKINGS_REQUEST,
});

export const saveBookingsSuccess = (bookings) => ({
  type: SAVE_BOOKINGS_SUCCESS,
  bookings,
});

export const saveBookingsFail = (error) => ({
  type: SAVE_BOOKINGS_FAIL,
  error,
});
console.log('je suis chez actions');
