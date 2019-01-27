import { RECEIVE_PLAYING_TRACK, 
  TOGGLE_PLAY,
  RECEIVE_NEXT_TRACK, 
  RECEIVE_NEXT_IN_QUEUE, 
  RECEIVE_PREV_IN_QUEUE } from '../../actions/current_track_actions';
import { REMOVE_TRACK } from '../../actions/track_actions';
import { merge } from 'lodash';

const defaultState = {
  currentTrack: null,
  queue: [],
  isPlaying: false,
  queuePos: null,
};

export default (state = defaultState, action) => {
  Object.freeze(null);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYING_TRACK:
      if (state.currentTrack === null) newState.isPlaying = true;
      newState.currentTrack = action.track;
      newState.queue.push(action.track.id);
      newState.queuePos = newState.queue.length - 1;
      return newState;
    case RECEIVE_NEXT_TRACK:
      newState.currentTrack = action.track;
      newState.queue.push(action.track.id);
      newState.queuePos = newState.queue.length - 1;
      return newState;
    case TOGGLE_PLAY:
      if (newState.isPlaying) newState.isPlaying = false;
      else newState.isPlaying = true;
      return newState;
    case REMOVE_TRACK:
      if (action.trackId === newState.currentTrack.id) newState.currentTrack === null;
      newState.queue = newState.queuefilter(id => id !== action.trackId);
      newState.queuePos = newState.queue.length - 1;
      return newState; 
    case RECEIVE_NEXT_IN_QUEUE:
      newState.queuePos++;
      newState.currentTrack = action.track;
      return newState;
    case RECEIVE_PREV_IN_QUEUE:
      newState.queuePos--;
      newState.currentTrack = action.track;
      return newState;
    default: 
      return state;
  }
};