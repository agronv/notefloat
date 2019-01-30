import * as TrackAPI from "../utils/tracks_util";
export const RECEIVE_PLAYING_TRACK = "RECEIVE_PLAYING_TRACK";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const RECEIVE_NEXT_TRACK = "RECEIVE_NEXT_TRACK";
export const RECEIVE_NEXT_IN_QUEUE = "RECEIVE_NEXT_IN_QUEUE";
export const RECEIVE_PREV_IN_QUEUE = "RECEIVE_PREV_IN_QUEUE";

export const receivePlayingTrack = (track) => {
  return {
    type: RECEIVE_PLAYING_TRACK,
    track,
  };
};

export const receiveNextTrack = (track) => {
  return {
    type: RECEIVE_NEXT_TRACK,
    track,
  };
};

export const receieveNextInQueue = (track) => {
  return {
    type: RECEIVE_NEXT_IN_QUEUE,
    track,
  };
};

export const receievePrevInQueue = (track) => {
  return {
    type: RECEIVE_PREV_IN_QUEUE,
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
    return TrackAPI.fetchCompleteTrack(id).then((track) => {
      dispatch(receivePlayingTrack(track));
    }),
    errors => dispatch(receiveTrackErrors(errors.responseJSON));
  };
};

export const fetchNextTrack = (genre) => {
  return (dispatch) => {
    return TrackAPI.fetchRandomTracks(genre).then((track) => {
      dispatch(receiveNextTrack(track));
    }),
    errors => dispatch(receiveTrackErrors(errors.responseJSON));
  };
};

export const nextInQueue = (id) => {
  return (dispatch) => {
    return TrackAPI.fetchCompleteTrack(id).then((track) => {
      dispatch(receieveNextInQueue(track));
    }),
      errors => dispatch(receiveTrackErrors(errors.responseJSON));
  };
};

export const prevInQueue = (id) => {
  return (dispatch) => {
    return TrackAPI.fetchCompleteTrack(id).then((track) => {
      dispatch(receievePrevInQueue(track));
    }),
      errors => dispatch(receiveTrackErrors(errors.responseJSON));
  };
};

export const fetchRandomNextTrack = () => {
  return (dispatch) => {
    return TrackAPI.fetchCompleteRandomTracks().then((track) => {
      dispatch(receiveNextTrack(track));
    }),
      errors => dispatch(receiveTrackErrors(errors.responseJSON));
  };
};