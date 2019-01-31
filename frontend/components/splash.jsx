import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import React from 'react';
import { fetchSplashtracks } from '../actions/track_actions';
import TrackIndexItem from './tracks/track_index_item';
import { Link } from 'react-router-dom';

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

    return (
      <div className="splash">
        <div className="small-splash">
          <section className="image-section">
            <div className="top-splash">
              <div className="notefloat-splash">
                <i className="fab fa-soundcloud notefloat-icon"></i>
                <h3>NoteFloat</h3>
              </div>
              <div className="splash-buttons">
                <button className="nav-button login" onClick={() => this.props.openModal('login')}>Sign In</button>
                <button className="nav-button signup" onClick={() => this.props.openModal('signup')}>Create account</button>
              </div>
            </div>
            <div className="inspiring-words">
              <h4 className="splash-title">
                What's next in music is first on SoundCloud
              </h4>
              <p className="splash-para">
                Upload your first track and begin your journey. SoundCloud gives you space
                to create, find your fans, and connect with other artists.
              </p>
            </div>
          </section>
          <section className="user-tracks-section splash-music">
            <h3 className="splash-music-text">
              Hear what’s trending for free in the NoteFloat community
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
  }
}

const mdp = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    fetchSplashtracks: () => dispatch(fetchSplashtracks()),
  }
}

export default connect(msp, mdp)(Splash);