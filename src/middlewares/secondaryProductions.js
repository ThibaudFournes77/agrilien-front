import axios from 'axios';
import {
  LOAD_SECONDARY_PRODUCTIONS,
  saveSecondaryProductionsRequest,
  saveSecondaryProductionsSuccess,
  saveSecondaryProductionsFail,
} from 'src/actions/secondaryProductions';

const secondaryProductionsMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOAD_SECONDARY_PRODUCTIONS:
      store.dispatch(saveSecondaryProductionsRequest());
      try {
        const { data } = await axios.get('https://agrilienback.herokuapp.com/categories');
        const secondaryProductions = data.categories.filter((category) => category.group === 'Productions secondaires');
        const secondaryProductionsLabel = [];
        secondaryProductions.forEach((prod) => {
          secondaryProductionsLabel.push(prod.label);
        });
        store.dispatch(
          saveSecondaryProductionsSuccess(secondaryProductions, secondaryProductionsLabel),
        );
      }
      catch (error) {
        store.dispatch(saveSecondaryProductionsFail(error.message));
      }
      break;
    default:
      next(action);
  }
};

export default secondaryProductionsMiddleware;
