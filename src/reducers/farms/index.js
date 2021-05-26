import { combineReducers } from 'redux';

import farmReducer from './farm';
import farmsReducer from './farms';
import farmCreationReducer from './farmCreation';

const reducer = combineReducers({
  farms: farmsReducer,
  farm: farmReducer,
  creation: farmCreationReducer,
});

export default reducer;
