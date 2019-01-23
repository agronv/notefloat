import { combineReducers } from 'redux';
import errorsReducer from "./errors/errors_reducer";
import sessionReducer from './session_reducer';
import entitiesReducer from './enitites/entities_reducer';
import uiReducer from './ui/ui_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
});