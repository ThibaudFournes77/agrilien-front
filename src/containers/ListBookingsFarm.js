import { connect } from 'react-redux';
import ListBookingsFarm from '../components/screens/ListBookingsFarm';
import { loadBookings } from '../actions/bookingsFarm';

const mapStateToProps = (state) => ({
  bookings: state.bookingsFarm.list,
  loading: state.bookingsFarm.loading,
  error: state.bookingsFarm.error,
});

const mapDispatchToProps = (dispatch) => ({
  loadBookings: (id) => {
    dispatch(loadBookings(id));
    console.log('container id', id);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(ListBookingsFarm);

export default container;
