import { combineReducers } from 'redux';
import mainProductionsReducer from './mainProductions';
import secondaryProductionsReducer from './secondaryProductions';
import usersReducer from './users';
import otherInfosReducer from './otherInfos';
import farmReducer from './farms';
import searchReducer from './search';
import bookingsFarmReducer from './bookingsFarm';

const rootReducer = combineReducers({
  mainProductions: mainProductionsReducer,
  secondaryProductions: secondaryProductionsReducer,
  users: usersReducer,
  otherInfos: otherInfosReducer,
  farms: farmReducer,
  search: searchReducer,
  bookingsFarm: bookingsFarmReducer,
});

export default rootReducer;
