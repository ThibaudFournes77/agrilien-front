import { connect } from 'react-redux';
import ListFarms from 'src/components/screens/ListFarms';
import { loadFarms } from 'src/actions/farms';

const mapStateToProps = (state) => ({
  farms: state.farms.farms.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadFarms: () => {
    dispatch(loadFarms());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(ListFarms);

export default container;
