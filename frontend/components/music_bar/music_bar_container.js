import MusicBar from './music_bar';
import { connect } from 'react-redux';
import { receivePlayingTrack, toggleTrack} from '../../actions/current_track_actions';

const msp = (state) => {
  return {
    currentTrack: state.ui.audio.currentTrack,
    isPlaying: state.ui.audio.isPlaying,
  };
};

const mdp = (dispatch) => {
  return {
    receivePlayingTrack: (id) => dispatch(receivePlayingTrack(id)),
    toggleTrack: () => dispatch(toggleTrack()),
  };
};

export default connect(msp, mdp)(MusicBar);