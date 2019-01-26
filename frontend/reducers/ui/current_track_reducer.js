import { RECEIVE_PLAYING_TRACK, 
  TOGGLE_PLAY,
  RECEIVE_NEXT_TRACK } from '../../actions/current_track_actions';
import { REMOVE_TRACK } from '../../actions/track_actions';
import { merge } from 'lodash';

export default (state = null, action) => {
  Object.freeze(null);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYING_TRACK:
      action.track.isPlaying = true;
      return action.track;
    case RECEIVE_NEXT_TRACK:
      action.track.isPlaying = state.isPlaying ;
      return action.track;
    case TOGGLE_PLAY:
      if (newState.isPlaying) newState.isPlaying = false;
      else newState.isPlaying = true;
      return newState;
    case REMOVE_TRACK:
      if (action.trackId === newState.id) return null;
      return newState; 
    default: 
      return state;
  }
};