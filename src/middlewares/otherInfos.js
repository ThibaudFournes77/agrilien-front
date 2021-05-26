import axios from 'axios';
import {
  LOAD_OTHER_INFOS,
  saveOtherInfosRequest,
  saveOtherInfosSuccess,
  saveOtherInfosFail,
} from 'src/actions/otherInfos';

const secondaryProductionsMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case LOAD_OTHER_INFOS:
      store.dispatch(saveOtherInfosRequest());
      try {
        const { data } = await axios.get('https://agrilienback.herokuapp.com/categories');
        const otherInfos = data.categories.filter((category) => category.group === 'Autres');
        const otherInfosLabel = [];
        otherInfos.forEach((prod) => {
          otherInfosLabel.push(prod.label);
        });
        store.dispatch(
          saveOtherInfosSuccess(otherInfos, otherInfosLabel),
        );
      }
      catch (error) {
        store.dispatch(saveOtherInfosFail(error.message));
      }
      break;
    default:
      next(action);
  }
};

export default secondaryProductionsMiddleware;
