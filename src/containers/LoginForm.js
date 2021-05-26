import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { inputValueChange, submitLoginForm } from 'src/actions/users';

const mapStateToProps = (state, ownProps) => ({
  email: state.users.email,
  password: state.users.password,
  userInfos: state.users.userInfos,
  previousLocation: ownProps.match.params.previousLocation,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onInputValueChange: (name, value) => {
      dispatch(inputValueChange(name, value));
    },
    onFormSubmit: () => {
        dispatch(submitLoginForm());
    },
    onRedirect: () => {
      console.log('previousLocation', ownProps.match.params.previousLocation);
      const redirect = ownProps.location.search ? ownProps.location.search.split('=')[1]
       : ownProps.match.params.previousLocation ? `/${ownProps.match.params.previousLocation}`
       : '/';
      ownProps.history.push(redirect);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
