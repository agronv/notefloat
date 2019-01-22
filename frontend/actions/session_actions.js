import * as APIUtil from "../utils/session_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveSessionErrors = errors => {
  return { type: RECEIVE_SESSION_ERRORS, errors };
};

export const clearSessionErrors = () => {
  return { type: CLEAR_SESSION_ERRORS };
};

export const logIn = user => {
  return dispatch => {
    return APIUtil.logIn(user).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};

export const logOut = () => {
  return dispatch => {
    return APIUtil.logOut().then(
      response => {
        return dispatch(logoutCurrentUser());
      },
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};

export const signUp = user => {
  return dispatch => {
    return APIUtil.signUp(user).then(
      user => {
        return dispatch(receiveCurrentUser(user));
      },
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};

export const fetchUser = id => {
  return dispatch => {
    return APIUtil.fetchUser(id).then(
      user => {
        return dispatch(receiveUser(user));
      },
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};

export const fetchAllUsers = () => {
  return dispatch => {
    return APIUtil.fetchUsers().then(
      users => {
        return dispatch(receiveAllUsers(users));
      },
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
};