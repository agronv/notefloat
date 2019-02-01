import React from 'react';
import { connect } from 'react-redux';
import { destroyTrack } from '../../actions/track_actions';
import { fetchPlayingTrack, toggleTrack } from '../../actions/current_track_actions';
import { fetchCompleteUser } from '../../actions/session_actions';
import UserTrackItem from '../tracks/users_track_item';
import { openModal } from '../../actions/modal_actions';
import { getUsertracks } from '../../reducers/selectors/selectors';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.r1 = Math.floor(Math.random() * 170);
    this.r2 = Math.floor(Math.random() * 170);
    this.r3 = Math.floor(Math.random() * 170);
    this.r4 = Math.floor(Math.random() * 170);
    this.r5 = Math.floor(Math.random() * 170);
    this.r6 = Math.floor(Math.random() * 170);
  }

  componentDidMount() {
    this.props.fetchCompleteUser(this.props.match.params.userId);
  }

  render() {
    const { user, currentUser, tracks } = this.props;
    if (!user) return null;
    const userImage = user.photoUrl ? (
      <img src={user.photoUrl} className="user-show-image"></img>
    ) : (
      <img src={window.defaultUserPhoto} className="user-show-image"></img>
    )

    let track = null;
    if (tracks) {
      track = tracks.map((track, i) => {
        return < UserTrackItem track={track} liId={i} key={track.id} />
      });
    }

    const edit = currentUser && currentUser.id === user.id ? (
      <button className="edit-button" onClick={() => this.props.openModal('edit')}>
        <i className="fas fa-pencil-alt"></i>
        <p>Edit</p>
      </button>
    ) : ( null )

    const backgroundColor = {
      background: `linear-gradient(to bottom right, rgb(${this.r1}, ${this.r2}, ${this.r3}), rgb(${this.r4}, ${this.r5}, ${this.r6}))`
    }

    return (
      <div className="big-user-div">
        <div className="user-show">
          <section className="user-section" style={backgroundColor}>
            {userImage}
            <section className="user-section-div">
              <p className="user-show-text">{user.username}</p>
              {edit}
            </section>
          </section>
          <section className="user-tracks-section">
            <h3 className="user-tracks-title">Tracks</h3>
            <ul className="album-covers">
              {track}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    tracks: getUsertracks(state.entities.tracks, ownProps.match.params.userId),
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = (dispatch) => {
  return {
    destroyTrack: (id) => dispatch(destroyTrack(id)),
    fetchPlayingTrack: (id) => dispatch(fetchPlayingTrack(id)),
    toggleTrack: () => dispatch(toggleTrack()),
    fetchCompleteUser: (id) => dispatch(fetchCompleteUser(id)),
    openModal: (modal) => dispatch(openModal(modal)),
  }
}

export default connect(msp, mdp)(UserShow);