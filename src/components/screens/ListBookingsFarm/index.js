/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, withRouter } from 'react-router-dom';
import {
  Chip,
  Paper,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '6rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    margin: 'auto',
    marginTop: theme.gutter.normal,
    maxWidth: 1000,
    '&:hover': {
      backgroundColor: '#f7f7f7',
      cursor: 'pointer',
    },
  },
  guest: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  email: {
    fontSize: '1rem',
    color: 'grey',
  },
  booking: {
    fontSize: '1rem',
  },
}));

function ListBookingsFarm({
  bookings,
  loadBookings,
  match,
  loading,
  error,
}) {
  const { id } = match.params;
  useEffect(() => loadBookings(id), [id]);
  console.log('bookings', bookings);
  const classes = useStyles();

  if (bookings.length === 0) {
    console.log('coucou');
  } else {
    for (let i = 0; i < bookings.length; i++) {
      bookings[i].dateArrival = bookings[i].booked_from.substr(8, 2) + '/' + bookings[i].booked_from.substr(5, 2) + '/' + bookings[i].booked_from.substr(0, 4);
      bookings[i].dateDeparture = bookings[i].booked_to.substr(8, 2) + '/' + bookings[i].booked_to.substr(5, 2) + '/' + bookings[i].booked_to.substr(0, 4);
      if (bookings[i].nb_guests === 1) {
        bookings[i].vacancier = 'vacancier';
      } else {
        bookings[i].vacancier = 'vacanciers';
      }
    }
  }
  console.log('bookings', bookings);
  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )
        : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            {bookings.map((booking) => (
              <Paper className={classes.paper} key={booking.booking_id}>
                <div className={classes.guest}>
                  <Typography className={classes.name} color="primary">
                    {`${booking.guest_firstname} ${booking.guest_name}`}
                  </Typography>
                  <Typography className={classes.email}>
                    <Chip
                      icon={<EmailIcon />}
                      label={booking.guest_email}
                      color="primary"
                      variant="outlined"
                    />
                  </Typography>
                </div>
                <Typography className={classes.booking}>
                  {`Réservation du ${booking.dateArrival} au ${booking.dateDeparture} pour ${booking.nb_guests} ${booking.vacancier}`}
                </Typography>
              </Paper>
            ))}
          </>
        )}
    </div>
  );
}

ListBookingsFarm.propTypes = {
  bookings: PropTypes.array.isRequired,
  loadBookings: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};

// == Export
export default withRouter(ListBookingsFarm);
