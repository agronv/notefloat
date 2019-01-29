export const getUsertracks = (tracks, userId) => {
  return Object.values(tracks).filter(track => track.user_id === parseInt(userId));
};

export const trackComments = (comments, trackId) => {
  return Object.values(comments).filter(comment => comment.track_id === parseInt(trackId));
}