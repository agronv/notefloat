import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signUp, clearSessionErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: "Sign Up",
  };
};

const mdp = (dispatch) => {
  return {
    submitAction: user => dispatch(signUp(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(SessionForm);