export const getUsertracks = (tracks, userId) => {
  return Object.values(tracks).filter(track => track.user_id === parseInt(userId));
};

export const trackComments = (comments, trackId) => {
  return Object.values(comments).filter(comment => comment.track_id === parseInt(trackId) && !comment.parent_comment_id);
};

export const childrenComments = (comments, trackId, parentId) => {
  return Object.values(comments).filter(comment => comment.parent_comment_id === parseInt(parentId) && comment.track_id === parseInt(trackId));
};