import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import farm from 'src/middlewares/farm';
import mainProductions from 'src/middlewares/mainProductions';
import secondaryProductions from 'src/middlewares/secondaryProductions';
import auth from 'src/middlewares/auth';
import otherInfos from 'src/middlewares/otherInfos';
import farms from 'src/middlewares/farms';
import farmCreation from 'src/middlewares/farmCreation';
import search from 'src/middlewares/search';
import bookingsFarm from 'src/middlewares/bookingsFarm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    farms,
    farm,
    mainProductions,
    secondaryProductions,
    otherInfos,
    auth,
    farmCreation,
    search,
    bookingsFarm,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
