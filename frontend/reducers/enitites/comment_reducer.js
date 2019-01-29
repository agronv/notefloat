import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";
import { RECEIVE_TRACK } from '../../actions/track_actions';
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT: 
      delete newState[action.commentId];
      return newState;
    case RECEIVE_TRACK:
      if (action.comments) return action.comments;
      else return {};
    default:
      return newState;
  }
};