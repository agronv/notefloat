import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import tracksReducer from './track_reducer';

export default combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
});