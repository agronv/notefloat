import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import UserEdit from '../users/user_edit';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modal, closeModal } = this.props;
    if (!modal) return null;
  
    let component;
    if (modal === 'login') {
      component = <LoginFormContainer />;
    }
    else if (modal === 'signup') {
      component = <SignupFormContainer />;
    }
    else if (modal === 'edit') {
      component = <UserEdit />;
    }
    else return null;

    return (
      <div className="form-screen" onClick={closeModal}>
        <div className="modal-child" onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
    
  }
}

const msp = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Modal);