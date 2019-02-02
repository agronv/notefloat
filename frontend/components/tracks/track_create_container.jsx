import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack } from '../../actions/track_actions';

const msp = () => {
  return {
    track: { title: "", photoUrl: null, mp3: null, photo: null, genre: "alternative_rock", length: 0},
    formType: "create",
  };
};

const mdp = (dispatch) => {
  return {
    action: (track) => dispatch(createTrack(track)),
  };
};

export default connect(msp, mdp)(TrackForm);