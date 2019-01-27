import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import audioreducer from './current_track_reducer';

export default combineReducers({
  modal: modalReducer,
  audio: audioreducer,
});