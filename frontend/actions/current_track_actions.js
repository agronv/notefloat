import * as TrackAPI from "../utils/tracks_util";
export const RECEIVE_PLAYING_TRACK = "RECEIVE_PLAYING_TRACK";
export const TOGGLE_PLAY = "TOGGLE_PLAY";

export const receivePlayingTrack = (track) => {
  return {
    type: RECEIVE_PLAYING_TRACK,
    track,
  };
};

export const toggleTrack = () => {
  return {
    type: TOGGLE_PLAY,
  };
};

export const fetchPlayingTrack = (id) => {
  return (dispatch) => {
    return TrackAPI.fetchTrack(id).then((info) => {
      dispatch(receivePlayingTrack(info.track));
    }),
    errors => dispatch(receiveTrackErrors(errors.responseJSON));
  };
};