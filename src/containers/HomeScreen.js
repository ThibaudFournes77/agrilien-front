import { connect } from 'react-redux';
import HomeScreen from 'src/components/screens/HomeScreen';
import { loadMainProductions } from 'src/actions/mainProductions';

const mapStateToProps = (state) => ({
  mainProductions: state.mainProductions.list,
  mainProductionsLoading: state.mainProductions.loading,
  mainProductionsError: state.mainProductions.error,
});

const mapDispatchToProps = (dispatch) => ({
  loadMainProductions: () => {
    dispatch(loadMainProductions());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
