import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import UserEdit from '../users/user_edit';
import TrackEdit from '../tracks/track_edit_container';
import DeleteTrack from '../tracks/delete_track';
import { CSSTransitionGroup } from 'react-transition-group';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modal, closeModal, track, splash, demo } = this.props;
    if (!modal) return null;
  
    let component;
    if (modal === 'login') {
      component = <LoginFormContainer splash={splash} demo={demo}/>;
    }
    else if (modal === 'signup') {
      component = <SignupFormContainer splash={splash}/>;
    }
    else if (modal === 'edit') {
      component = <UserEdit />;
    }
    else if (modal === 'edit-track') {
      component = <TrackEdit track={track}/>;
    }
    else if (modal === 'delete-track') {
      component = <DeleteTrack track={track}/>;
    }
    else return null;

    return (
      <div className="form-screen" onClick={closeModal}>
        <CSSTransitionGroup 
        transitionName="modal-forms"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionLeave={false}
        transitionEnter={false}>
          <div className="modal-child" onClick={(e) => e.stopPropagation()}>
            {component}
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}

const msp = (state) => {
  return {
    modal: state.ui.modal.modal,
    track: state.ui.modal.track,
    splash: state.ui.modal.splash,
    demo: state.ui.modal.demo,
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Modal);