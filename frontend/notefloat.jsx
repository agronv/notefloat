import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { createComment, destroyComment } from "./actions/comment_actions";
import { childrenComments } from './reducers/selectors/selectors';


document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.createComment = createComment;
  window.destroyComment = destroyComment;
  window.childrenComments = childrenComments;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});