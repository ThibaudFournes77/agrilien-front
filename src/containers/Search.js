import { connect } from 'react-redux';
import Search from '../components/screens/ListFarms/Search';
import { loadMainProductions } from '../actions/mainProductions';
import {
  bioChange, search, inputValueChange, dateArrivalChange, dateDepartureChange,
} from '../actions/search';

const mapStateToProps = (state) => ({
  mainProductions: state.mainProductions.list,
  mainProductionsLoading: state.mainProductions.loading,
  mainProductionsError: state.mainProductions.error,
  mainProduction: state.search.mainProduction,
  name: state.search.name,
  label: state.search.label,
  bio: state.search.bio,
  precision: state.search.precision,
  localisation: state.search.localisation,
  city: state.search.city,
  department: state.search.department,
  region: state.search.region,
  dateArrival: state.search.dateArrival,
  dateDeparture: state.search.dateDeparture,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (name, value) => {
    dispatch(inputValueChange(name, value));
  },
  loadMainProductions: () => {
    dispatch(loadMainProductions());
  },
  bioChange: (name) => {
    dispatch(bioChange(name));
  },
  dateArrivalChange: (value) => {
    dispatch(dateArrivalChange(value));
  },
  dateDepartureChange: (value) => {
    dispatch(dateDepartureChange(value));
    console.log('container departure', value);
  },
  search: () => {
    dispatch(search());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
