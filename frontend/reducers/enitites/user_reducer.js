import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  RECEIVE_CURRENT_USER,
} from "../../actions/session_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return newState;
  }
};