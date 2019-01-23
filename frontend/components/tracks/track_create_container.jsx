import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack } from '../../actions/track_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    track: {title: "", photoUrl: null, fileUrl: null},
    formType: "create",
  };
};

const mdp = (dispatch) => {
  return {
    action: (track) => dispatch(createTrack(track)),
  };
};

export default withRouter(connect(msp, mdp)(TrackForm));