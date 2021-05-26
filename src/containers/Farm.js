import { connect } from 'react-redux';
import Farm from 'src/components/screens/Farm';
import { loadFarm } from 'src/actions/farm';

const mapStateToProps = (state) => ({
  farm: state.farms.farm.list,
  loading: state.farms.farm.loading,
  error: state.farms.farm.error,
});

const mapDispatchToProps = (dispatch) => ({
  loadFarm: (id) => {
    dispatch(loadFarm(id));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Farm);

export default container;
