import * as commentAPI from "../utils/comments_util";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

export const createComment = (track_id, comment) => {
  return dispatch => {
    return commentAPI.createComment(track_id, comment).then( comment => {
      return dispatch(receiveComment(comment));});
  };
};

export const destroyComment = (track_id, id) => {
  return dispatch => {
    return commentAPI.destroyComment(track_id, id).then( () => {
      return dispatch(removeComment(id));});
  };
};