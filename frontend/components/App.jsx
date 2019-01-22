
import React from "react";
import NavBar from "./navbar";
import { Route, Switch } from "react-router-dom";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute } from '../utils/route_util';

const App = () => (
  <>
    <header>
      <Route path="/" component={NavBar} />
    </header>
      <Switch>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
      </Switch>
    <footer>
    </footer>
  </>
);

export default App;