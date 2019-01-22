import { connect } from "react-redux";
import SessionForm from './session_form';
import { logIn, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: "Sign In",
  };
};

const mdp = (dispatch) => {
  return {
    submitAction: (user) => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(SessionForm);