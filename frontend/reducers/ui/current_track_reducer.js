import { RECEIVE_PLAYING_TRACK, 
  TOGGLE_PLAY,
  RECEIVE_NEXT_TRACK, 
  RECEIVE_NEXT_IN_QUEUE, 
  RECEIVE_PREV_IN_QUEUE,
  HANDLE_TIME_UPDATE,
  SET_WAVE_TIME } from '../../actions/current_track_actions';
import { REMOVE_TRACK } from '../../actions/track_actions';
import { merge } from 'lodash';

const defaultState = {
  currentTrack: null,
  queue: [],
  isPlaying: false,
  queuePos: null,
  time: 0,
  waveTime: 0,
};

export default (state = defaultState, action) => {
  Object.freeze(null);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYING_TRACK:
      newState.isPlaying = true;
      newState.currentTrack = action.track;
      newState.queue.push(action.track.id);
      newState.queuePos = newState.queue.length - 1;
      newState.time = 0;
      return newState;
    case RECEIVE_NEXT_TRACK:
      newState.currentTrack = action.track;
      newState.queue.push(action.track.id);
      newState.queuePos = newState.queue.length - 1;
      newState.time = 0;
      return newState;
    case TOGGLE_PLAY:
      if (newState.isPlaying) newState.isPlaying = false;
      else newState.isPlaying = true;
      return newState;
    case REMOVE_TRACK:
      if (newState.currentTrack && action.trackId === newState.currentTrack.id) newState.currentTrack === null;
      newState.queue = newState.queue.filter(id => id !== action.trackId);
      newState.queuePos = newState.queue.length - 1;
      return newState; 
    case RECEIVE_NEXT_IN_QUEUE:
      newState.queuePos++;
      newState.currentTrack = action.track;
      newState.time = 0;
      return newState;
    case RECEIVE_PREV_IN_QUEUE:
      newState.queuePos--;
      newState.currentTrack = action.track;
      newState.time = 0;
      return newState;
    case HANDLE_TIME_UPDATE:
      newState.time = action.time;
      return newState;
    case SET_WAVE_TIME:
      newState.waveTime = action.time;
      return newState;
    default: 
      return state;
  }
};