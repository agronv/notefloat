export const getUsertracks = (tracks, userId) => {
  return Object.values(tracks).filter(track => track.user_id === parseInt(userId));
};