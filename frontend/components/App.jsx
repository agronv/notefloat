
import React from "react";
import Modal from "./modal/modal";
import NavBar from "./navbar";
import { Route, Switch } from "react-router-dom";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import CreateFormContainer from "./tracks/track_create_container";
import EditFormContainer from "./tracks/track_edit_container";
import TrackIndex from "./tracks/track_index";
import TrackShow from "./tracks/track_show";
import { AuthRoute } from '../utils/route_util';

const App = () => (
  <>
    <header>
      <Route path="/" component={NavBar} />
    </header>
      <Switch>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <Route path="/tracks/:trackId" component={TrackShow} />
        <Route exact path="/tracks" component={TrackIndex} />
        <Route path="/track/new" component={CreateFormContainer} />
        <Route exact path="/track/edit/:trackId" component={EditFormContainer} />
      </Switch>
    <footer>
    </footer>
  </>
);

export default App;