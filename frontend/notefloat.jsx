import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import * as APIUtil from './utils/session_util';
import { fetchUser, fetchAllUsers } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     },
  //     session: { id: window.currentUser.id }
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }

  let store = configureStore();

  window.fetchUser = fetchUser;
  window.fetchAllUsers = fetchAllUsers;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});