import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import tracksReducer from './track_reducer';
import commentsReducer from './comment_reducer';

export default combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  comments: commentsReducer,
});