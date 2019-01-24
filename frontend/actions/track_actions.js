import * as TrackAPI from "../utils/tracks_util";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const CLEAR_TRACK_ERRORS = "CLEAR_TRACK_ERRORS";


export const receiveTrack = ({track, user}) => {
  return {
    type: RECEIVE_TRACK,
    track,
    user,
  };
};

export const receiveTracks = tracks => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  };
};

export const removeTrack = id => {
  return {
    type: REMOVE_TRACK,
    trackId: id,
  };
};

export const receiveTrackErrors = errors => {
  return { type: RECEIVE_TRACK_ERRORS, errors };
};

export const clearTrackErrors = () => {
  return { type: CLEAR_TRACK_ERRORS };
};

export const fetchTrack = id => {
  return dispatch => {
    return TrackAPI.fetchTrack(id).then(
      track => {
        return dispatch(receiveTrack(track));
      },
      errors => dispatch(receiveTrackErrors(errors.responseJSON))
    );
  };
};

export const fetchTracks = () => {
  return dispatch => {
    return TrackAPI.fetchTracks().then(
      tracks => {return dispatch(receiveTracks(tracks));});
  };
};

export const createTrack = (track) => {
  return dispatch => {
    return TrackAPI.createTrack(track).then(
      track => {
        return dispatch(receiveTrack(track));
      },
      errors => dispatch(receiveTrackErrors(errors.responseJSON))
    );
  };
};

export const updateTrack = (id, track) => {
  return dispatch => {
    return TrackAPI.updateTrack(id, track).then(
      track => {
        return dispatch(receiveTrack(track));
      },
      errors => dispatch(receiveTrackErrors(errors.responseJSON))
    );
  };
};

export const destroyTrack = (id) => {
  return dispatch => {
    return TrackAPI.destroyTrack(id).then(
      () => {
        return dispatch(removeTrack(id));
      },
      errors => dispatch(receiveTrackErrors(errors.responseJSON))
    );
  };
};

