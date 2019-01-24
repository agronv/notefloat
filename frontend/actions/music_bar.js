import * as TrackAPI from "../utils/tracks_util";
export default RECEIVE_PLAYING_TRACK = "RECEIVE_PLAYING_TRACK";
export default PLAY_TRACK = "PLAY_TRACK";
export default PAUSE_TRACK = "PAUSE_TRACK";

export const receivePlayingTrack = (track) => {
  return {
    type: RECEIVE_PLAYING_TRACK,
    track,
  };
};

export const playTrack = () => {
  return {
    type: PLAY_TRACK,
  };
};

export const pauseTrack = () => {
  return {
    type: PAUSE_TRACK,
  };
};

export const fetchPlayingTrack = (id) => {
  return (dispatch) => {
    return TrackAPI.fetchTrack(id).then((track) => {
      dispatch(receivePlayingTrack(track));
    }),
    errors => dispatch(receiveTrackErrors(errors.responseJSON));
  };
};