import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signUp, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: "Sign Up",
  };
};

const mdp = (dispatch) => {
  return {
    submitAction: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(SessionForm);