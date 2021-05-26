import { connect } from 'react-redux';
import FarmCreationScreen from 'src/components/screens/FarmCreationScreen';
import { inputValueChange, switchValueChange, createFarm } from 'src/actions/farms';
import { loadMainProductions } from 'src/actions/mainProductions';
import { loadSecondaryProductions } from 'src/actions/secondaryProductions';
import { loadOtherInfos } from 'src/actions/otherInfos';

const mapStateToProps = (state) => ({
  name: state.farms.creation.name,
  bio: state.farms.creation.bio,
  label: state.farms.creation.label,
  address: state.farms.creation.address,
  postalCode: state.farms.creation.postalCode,
  city: state.farms.creation.city,
  accomodation: state.farms.creation.accomodation,
  number: state.farms.creation.number,
  price: state.farms.creation.price,
  description: state.farms.creation.description,
  activities: state.farms.creation.activities,
  mainProduction: state.farms.creation.mainProduction,
  secondaryProductions: state.farms.creation.secondaryProductions,
  otherInfos: state.farms.creation.otherInfos,
  mainProductionsList: state.mainProductions.list,
  secondaryProductionsList: state.secondaryProductions.labels,
  otherInfosList: state.otherInfos.labels,
  mainProductionLoading: state.mainProductions.loading,
  secondaryProductionsLoading: state.secondaryProductions.loading,
  otherInfosLoading: state.otherInfos.loading,
  mainProductionError: state.mainProductions.error,
  secondaryProductionsError: state.secondaryProductions.error,
  otherInfosError: state.otherInfos.error,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (name, value) => {
    dispatch(inputValueChange(name, value));
  },
  onSwitchChange: (name) => {
    dispatch(switchValueChange(name));
  },
  onFarmCreationSubmit: () => {
    dispatch(createFarm());
  },
  loadMainProductions: () => {
    dispatch(loadMainProductions());
  },
  loadSecondaryProductions: () => {
    dispatch(loadSecondaryProductions());
  },
  loadOtherInfos: () => {
    dispatch(loadOtherInfos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FarmCreationScreen);
