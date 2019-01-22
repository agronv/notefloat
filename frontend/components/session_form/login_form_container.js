import { connect } from "react-redux";
import SessionForm from './session_form';
import { logIn, clearSessionErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: "Sign In",
  };
};

const mdp = (dispatch) => {
  return {
    submitAction: (user) => dispatch(logIn(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(msp, mdp)(SessionForm);