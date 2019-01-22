import { combineReducers } from 'redux';
import errorsReducer from "./errors/errors_reducer";
import sessionReducer from './session_reducer';
import entitiesReducer from './enitites/entities_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});