/* eslint-disable no-console */
import {
  MAIN_PROD_CHANGE, INPUT_VALUE_CHANGE, BIO_CHANGE, DATE_ARRIVAL_CHANGE, DATE_DEPARTURE_CHANGE,
} from '../actions/search';

export const initialState = {
  name: '',
  label: '',
  mainProduction: '',
  bio: false,
  precision: '',
  localisation: '',
  city: '',
  department: '',
  region: '',
  dateArrival: null,
  dateDeparture: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MAIN_PROD_CHANGE:
      return {
        ...state,
        mainProd: action.search.mainProd,
      };
    case INPUT_VALUE_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case BIO_CHANGE:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case DATE_ARRIVAL_CHANGE:
      return {
        ...state,
        dateArrival: action.value,
      };
    case DATE_DEPARTURE_CHANGE:
      console.log('reducer date departure', action.value);
      return {
        ...state,
        dateDeparture: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
