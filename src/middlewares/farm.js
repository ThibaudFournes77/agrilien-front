import {
  LOAD_FARM,
  saveFarmRequest,
  saveFarmSuccess,
  saveFarmFail,
} from 'src/actions/farm';
import api from '../api';

const farm = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_FARM:
      store.dispatch(saveFarmRequest());
      api.get(`/farm/${action.id}`)
        .then((response) => {
          store.dispatch(saveFarmSuccess(response.data.farm));
        })
        .catch((error) => store.dispatch(saveFarmFail(error)));
      break;
    default:
      next(action);
  }
};

export default farm;
