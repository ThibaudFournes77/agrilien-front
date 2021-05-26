/* eslint-disable max-len */
/* eslint-disable no-console */
import { SEARCH } from '../actions/search';
import { saveFarms } from '../actions/farms';
import api from '../api';

const search = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH: {
      const {
        bio, mainProduction, precision, dateArrival, dateDeparture,
      } = store.getState().search;
      let {
        city, department, region,
      } = store.getState().search;

      if (precision === 'city') {
        department = '';
        region = '';
      } else if (precision === 'department') {
        city = '';
        region = '';
      } else if (precision === 'region') {
        city = '';
        department = '';
      }

      let stringDateArrival = '';
      let formatedDateArrival = '';
      let stringDateDeparture = '';
      let formatedDateDeparture = '';

      if (dateArrival) {
        stringDateArrival = dateArrival.toLocaleDateString('YYYYddMM');
        formatedDateArrival = stringDateArrival.substr(6, 4) + stringDateArrival.substr(3, 2) + stringDateArrival.substr(0, 2);
      }
      console.log('dateDeparture', dateDeparture);
      if (dateDeparture) {
        stringDateDeparture = dateDeparture.toLocaleDateString('YYYYddMM');
        formatedDateDeparture = stringDateDeparture.substr(6, 4) + stringDateDeparture.substr(3, 2) + stringDateDeparture.substr(0, 2);
      }
      console.log('formatedDateDeparture', formatedDateDeparture);

      api.get(`/searchFarms/?city=${city}&department=${department}&region=${region}&arrival=${formatedDateArrival}&departure=${formatedDateDeparture}&organic=${bio}&mainprod=${mainProduction}`)
        .then((response) => {
          store.dispatch(saveFarms(response.data.selectedFarms));
          console.log(response.data.selectedFarms);
        })
        .catch((error) => console.log('error', error));
      // .finally(() => {
      //   store.dispatch(stopLoadingFarms());
      // });
      break;
    }
    default:
      next(action);
  }
};
// city=${city}&arrival=20210425&departure=20210428&
export default search;
