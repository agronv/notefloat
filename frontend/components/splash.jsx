import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';
import { logOut } from "../actions/session_actions";
import { fetchSplashtracks } from '../actions/track_actions';
import TrackIndexItem from './tracks/track_index_item';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSplashtracks();
  }

  render() {
    const { tracks } = this.props;
    let track = null;
    if (tracks) {
      track = tracks.map((track, i) => {
        return < TrackIndexItem track={track} liId={i} key={track.id} />
      });
    }

    const buttons = this.props.currentUser ? (
      <div className="splash-buttons logout-splash">
        <button className="nav-button login login-splash" onClick={this.props.logOut}>Log Out</button>
      </div>
     ) : (
      <div className="splash-buttons">
        <button className="nav-button login login-splash" onClick={() => this.props.openModal({modal: 'login', splash: true})}>Sign In</button>
        <button className="nav-button signup" onClick={() => this.props.openModal({modal: 'signup', splash: true})}>Create account</button>
        <button className="nav-button signup" onClick={() => this.props.openModal({ modal: 'login', splash: true, demo: true })}>demo</button>
      </div>
    )

    return (
      <div className="splash">
        <div className="small-splash">
          <section className="image-section">
            <div className="top-splash">
              <div className="notefloat-splash">
                <i className="fab fa-soundcloud notefloat-icon"></i>
                <h3>NoteFloat</h3>
              </div>
              {buttons}
            </div>
            <div className="inspiring-words">
              <h4 className="splash-title">
                What's next in music is first on NoteFloat
              </h4>
              <p className="splash-para">
                Upload your first track and begin your journey. NoteFloat gives you space
                to create, find your fans, and connect with other artists.
              </p>
            </div>
          </section>
          <section className="user-tracks-section splash-music">
            <h3 className="splash-music-text">
              Hear what’s trending in the NoteFloat community
            </h3>
            <ul className="album-covers">
              {track}
            </ul>
            <Link to="/tracks" className="nav-button signup collection">
              Explore the collection
            </Link>
          </section>
        </div>
      </div>
    )
  }
}

const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks),
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    openModal: (data) => dispatch(openModal(data)),
    fetchSplashtracks: () => dispatch(fetchSplashtracks()),
  }
}

export default connect(msp, mdp)(Splash);