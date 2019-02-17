import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK,
} from "../../actions/track_actions";
import { RECEIVE_COMPLETE_USER } from '../../actions/session_actions';
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_TRACK:
      newState[action.track.id] = action.track;
      return newState;

    case REMOVE_TRACK:
      delete newState[action.trackId];
      return newState;

    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_COMPLETE_USER:
      if (action.tracks) return action.tracks;
      else return {};

    default:
      return state;
  }
};