import React from 'react';
import { connect } from 'react-redux';
import { destroyTrack } from '../../actions/track_actions';
import { fetchPlayingTrack, toggleTrack } from '../../actions/current_track_actions';
import { fetchCompleteUser } from '../../actions/session_actions';
import TrackIndexItem from '../tracks/track_index_item';
import openModal from '../modal/modal';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompleteUser(this.props.match.params.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    const userImage = user.photo ? (
      <img src={user.photo} className="user-show-image"></img>
    ) : (
      <img src={window.defaultUserPhoto} className="user-show-image"></img>
    )

    let tracks = null;
    if (user.tracks) {
      tracks = user.tracks.map((track) => {
        return < TrackIndexItem track={track} key={track.id} />
      });
    }

    return (
      <div className="user-show">
        <section className="user-section">
          {userImage}
          <p className="user-show-text">{user.username}</p>
          <button className="edit-button" onClick={() => this.props.openModal('edit')}>Edit</button>
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