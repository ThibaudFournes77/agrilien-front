import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from 'src/components/utils/Header';
import { logout } from 'src/actions/users';

const mapStateToProps = (state, ownProps) => ({
  userInfos: state.users.userInfos,
  // we pass to Header component the current location of the user
  location: ownProps.location.pathname !== '/' ? ownProps.location.pathname.split(/\/(.+)/)[1] : '',
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  }
});

// we give to Header component access to react-router properties like location
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
