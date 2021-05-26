import axios from 'axios';
import {
  LOAD_MAIN_PRODUCTIONS,
  saveMainProductionsRequest,
  saveMainProductionsSuccess,
  saveMainProductionsFail,
} from 'src/actions/mainProductions';

const mainProductions = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOAD_MAIN_PRODUCTIONS:
      store.dispatch(saveMainProductionsRequest());
      try {
        const { data } = await axios.get('https://agrilienback.herokuapp.com/mainproductions');
        store.dispatch(saveMainProductionsSuccess(data.mainProductions));
      }
      catch (error) {
        store.dispatch(saveMainProductionsFail(error.message));
      }
      break;
    default:
      next(action);
  }
};

export default mainProductions;
