import { RECEIVE_TRACK_ERRORS, RECEIVE_TRACK, CLEAR_TRACK_ERRORS, RECEIVE_TRACKS } from '../../actions/track_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    case RECEIVE_TRACK:
    case CLEAR_TRACK_ERRORS:
    case RECEIVE_TRACKS:
      return [];
    default:
      return state;
  }
};