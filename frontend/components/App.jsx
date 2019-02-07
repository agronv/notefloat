import React from "react";
import Modal from "./modal/modal";
import NavBar from "./navbar";
import { Route, Switch } from "react-router-dom";
import CreateFormContainer from "./tracks/track_create_container";
import EditFormContainer from "./tracks/track_edit_container";
import TrackIndex from "./tracks/track_index";
import TrackShow from "./tracks/track_show";
import UserShow from './users/user_show';
import { ProtectedRoute } from '../utils/route_util';
import MusicBar from './music_bar/music_bar';
import Splash from './splash';
import Ping from './ping';

const App = () => (
  <>
    < Modal />
    <Switch>
      <Route exact path="/ping" component={Ping} />
      <Route exact path="/" component={Splash} />
      <Route path="/" component={NavBar} />
    </Switch>
    
    <Switch>
      <Route exact path="/tracks/edit/:trackId" component={EditFormContainer} />
      <ProtectedRoute exact path="/tracks/new" component={CreateFormContainer} />
      <Route exact path="/tracks/:trackId" component={TrackShow} />
      <Route exact path="/tracks" component={TrackIndex} />
      <Route exact path="/users/:userId" component={UserShow} />
    </Switch>
    < MusicBar />
  </>
);

export default App;