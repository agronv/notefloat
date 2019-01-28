import React from 'react';
import { connect } from 'react-redux';
import { destroyTrack } from '../../actions/track_actions';
import { fetchPlayingTrack, toggleTrack } from '../../actions/current_track_actions';
import { fetchCompleteUser } from '../../actions/session_actions';
import UserTrackItem from '../tracks/users_track_item';
import { openModal } from '../../actions/modal_actions';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompleteUser(this.props.match.params.userId);
  }

  render() {
    const { user, currentUser } = this.props;
    if (!user) return null;
    const userImage = user.photoUrl ? (
      <img src={user.photoUrl} className="user-show-image"></img>
    ) : (
      <img src={window.defaultUserPhoto} className="user-show-image"></img>
    )

    let tracks = null;
    if (user.tracks) {
      tracks = user.tracks.map((track) => {
        return < UserTrackItem track={track} key={track.id} />
      });
    }

    const edit = currentUser && currentUser.id === user.id ? (
      <button className="edit-button" onClick={() => this.props.openModal('edit')}>
        <i className="fas fa-pencil-alt"></i>
        <p>Edit</p>
      </button>
    ) : ( null )

    return (
      <div className="user-show">
        <section className="user-section">
          {userImage}
          <p className="user-show-text">{user.username}</p>
          {edit}
        </section>
        <section className="user-tracks-section">
          <h1 className="user-tracks-title">Tracks</h1>
          <ul className="album-covers">
            {tracks}
          </ul>
        </section>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
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