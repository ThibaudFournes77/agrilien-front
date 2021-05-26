import { INPUT_VALUE_CHANGE, SWITCH_VALUE_CHANGE } from 'src/actions/farms';

const initialState = {
  name: '',
  bio: false,
  label: false,
  address: '',
  postalCode: '',
  city: '',
  image: null,
  accomodation: '',
  number: 0,
  price: 0,
  description: '',
  activities: '',
  mainProduction: '',
  secondaryProductions: [],
  otherInfos: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_VALUE_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SWITCH_VALUE_CHANGE:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    default:
      return state;
  }
};

export default reducer;
