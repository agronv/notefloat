import React from 'react';
import { connect } from 'react-redux';
import { updateTrack } from '../../actions/track_actions';
import TrackForm from './track_form';
import { closeModal } from '../../actions/modal_actions';


class TrackEdit extends React.Component {

  render() {
    const { action, formType, track } = this.props;
    if (!track) return null;
    
    return (
      <TrackForm
        action={action}
        formType={formType}
        track={track} />
    );
  }
}

const msp = () => {
  return {
    formType: "edit",
  };
};

const mdp = (dispatch) => {
  return {
    action: (id, track) => dispatch(updateTrack(id, track)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(TrackEdit);
