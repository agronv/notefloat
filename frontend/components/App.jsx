
import React from "react";
import Modal from "./modal/modal";
import NavBar from "./navbar";
import { Route, Switch } from "react-router-dom";
import CreateFormContainer from "./tracks/track_create_container";
import EditFormContainer from "./tracks/track_edit_container";
import TrackIndex from "./tracks/track_index";
import TrackShow from "./tracks/track_show";
import { ProtectedRoute } from '../utils/route_util';
import MusicBar from './music_bar/music_bar';

const App = () => (
  <>
    < Modal />
    < MusicBar />
    <header>
      < NavBar />
    </header>
      <div className="spaceholder"></div>
      <Switch>
        <Route exact path="/tracks/edit/:trackId" component={EditFormContainer} />
        <ProtectedRoute exact path="/tracks/new" component={CreateFormContainer} />
        <Route path="/tracks/:trackId" component={TrackShow} />
        <Route exact path="/tracks" component={TrackIndex} />
      </Switch>
  </>
);

export default App;