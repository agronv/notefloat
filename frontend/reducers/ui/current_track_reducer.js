import { RECEIVE_PLAYING_TRACK, 
  TOGGLE_PLAY,
  NEXT_TRACK } from '../../actions/current_track_actions';
import { merge } from 'lodash';

export default (state = null, action) => {
  Object.freeze(null);
  switch (action.type) {
    case RECEIVE_PLAYING_TRACK:
      action.track.isPlaying = true;
      return action.track;
    case NEXT_TRACK:
      action.track.isPlaying = state.isPlaying ;
      return action.track;
    case TOGGLE_PLAY:
      let newState = merge({}, state);
      if (newState.isPlaying) newState.isPlaying = false;
      else newState.isPlaying = true;
      return newState;
    default: 
      return state;
  }
};