import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import './App.css';
// import './styles.scss';

import LoginForm from 'src/containers/LoginForm';
import SignUp from 'src/components/Inscription/SignUp';
import Header from 'src/containers/Header';
import HomeScreen from 'src/containers/HomeScreen';
import FarmCreationScreen from 'src/containers/FarmCreationScreen';
import Footer from 'src/components/utils/Footer';
import Farm from 'src/containers/Farm';
import ListFarms from 'src/containers/ListFarms';
import AboutUsScreen from 'src/components/screens/AboutUsScreen';
import ListBookingsFarm from 'src/containers/ListBookingsFarm';

const styles = () => ({
  '@global': {
    main: {
      margin: '6rem 2rem 1rem 2rem !important',
    },
  },
});

function App() {
  // const location = useLocation();

  // each time the location changes, the callback will be executed again
  // useEffect(() => {
  // scroll at the top of the screen
  //    window.scroll(0, 0);
  //  }, [location]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login/:previousLocation?" component={LoginForm} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/farmCreate" component={FarmCreationScreen} />
        <Route exact path="/farms">
          <ListFarms />
        </Route>
        <Route exact path="/farm/:id">
          <Farm />
        </Route>
        <Route exact path="/about" component={AboutUsScreen} />
        <Route exact path="/bookings/farm/:id">
          <ListBookingsFarm />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(App);
