
import React from "react";
import NavBar from "./navbar";
import { Route } from "react-router-dom";
import SignUpFormContainer from "./signup_form_container";
import LogInFormContainer from "./login_form_container";
import { AuthRoute } from '../utils/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <Route path="/" component={NavBar} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
    </header>
  </div>
);

export default App;