export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = ({modal, track, splash, demo}) => {
  return {
    type: OPEN_MODAL,
    modal,
    track,
    splash,
    demo,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};