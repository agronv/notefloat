import { connect } from "react-redux";
import SessionForm from './session_form';
import { logIn } from '../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: "Log In",
  };
};

const mdp = (dispatch) => {
  return {
    submitAction: (user) => dispatch(logIn(user)),
  };
};

export default connect(msp, mdp)(SessionForm);