
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

const App = () => (
  <>
    < Modal />
    <header>
      < NavBar />
    </header>
      <div className="spaceholder"></div>
      <Switch>
        <Route exact path="/tracks/edit/:trackId" component={EditFormContainer} />
        <ProtectedRoute exact path="/tracks/new" component={CreateFormContainer} />
        <Route exact path="/tracks/:trackId" component={TrackShow} />
        <Route exact path="/tracks" component={TrackIndex} />
        <ProtectedRoute exact path="/users/:userId" component={UserShow} />
      </Switch>
    < MusicBar />
  </>
);

export default App;