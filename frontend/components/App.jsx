
import React from "react";
import NavBar from "./navbar";
import { Route, Switch } from "react-router-dom";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute } from '../utils/route_util';
import Splash from './splash/splash';
import PlayBar from './playbar/PlayBar';

const App = () => (
  <>
    <header>
      <Route path="/" component={NavBar} />
    </header>
      <Switch>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
      </Switch>
      {/* <Route exact path="/" component={Splash}/> */}
    <footer>
      {/* <Route exact path="/" component={PlayBar} />       */}
    </footer>
  </>
);

export default App;