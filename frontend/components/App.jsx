
import React from "react";
import NavBar from "./navbar";
import { Route } from "react-router-dom";
import SignUpFormContainer from "./signup_form_container";
import LogInFormContainer from "./login_form_container";
import { AuthRoute } from '../utils/route_util';

const App = () => (
  <>
    <header>
      <Route path="/" component={NavBar} />
    </header>
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
  </>
);

export default App;