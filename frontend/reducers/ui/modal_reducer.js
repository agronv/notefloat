import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

const defaultModal = {
  modal: null,
  track: null,
  splash: false,
  demo: false,
};

export default function modalReducer(state = defaultModal, action) {
  switch (action.type) {
    case OPEN_MODAL:
      delete action.type;
      return action;
    case CLOSE_MODAL:
      return defaultModal;
    default:
      return state;
  }
}