import { LOAD_FARMS, saveFarms, stopLoadingFarms } from 'src/actions/farms';
import api from '../api';

const farms = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_FARMS:
      api.get('/farms')
        .then((response) => {
          store.dispatch(saveFarms(response.data.farms));
        })
        .catch((error) => console.log('error', error))
        .finally(() => {
          store.dispatch(stopLoadingFarms());
        });
      break;
    default:
      next(action);
  }
};

export default farms;
