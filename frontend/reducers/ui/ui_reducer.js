import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import currentTrackreducer from './current_track_reducer';

export default combineReducers({
  modal: modalReducer,
  currentTrack: currentTrackreducer,
});