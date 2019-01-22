import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack } from '../../actions/track_actions';

const msp = (state) => {
  return {
    track: {title: ""},
    formType: "create",
  };
};

const mdp = (dispatch) => {
  return {
    action: (track) => dispatch(createTrack(track)),
  };
};

export default connect(msp, mdp)(TrackForm);