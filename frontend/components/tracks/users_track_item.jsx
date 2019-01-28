import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayingTrack, toggleTrack } from '../../actions/current_track_actions';
import { openModal } from '../../actions/modal_actions';

class UserTrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTrack = this.toggleTrack.bind(this);
  }

  toggleTrack(e) {
    e.preventDefault();
    let { currentTrack, track } = this.props;
    if (!currentTrack || track.id !== currentTrack.id) {
      this.props.fetchPlayingTrack(track.id);
    }
    else {
      this.props.toggleTrack();
    }
  }

  playing() {
    const { currentTrack, track, isPlaying } = this.props;
    if (currentTrack) {
      if (currentTrack.id === track.id && isPlaying) {
        return true;
      }
    }
    return false;
  }

  paused() {
    const { currentTrack, track, isPlaying } = this.props;
    if (currentTrack) {
      if (currentTrack.id === track.id && !(isPlaying)) {
        return true;
      }
    }
    return false;
  }

  render() {
    const { track, currentUser } = this.props;
    
    const image = track.photoUrl ? (<img className="cover-art" src={track.photoUrl} />) :
      (<img className="cover-art" src={window.defaultTrackPhoto} />)


    const icon = this.playing() ? (
      <i className="fas fa-pause-circle track-icon track-icon-active" onClick={this.toggleTrack}></i>
    ) : (this.paused() ? (
      <i className="fas fa-play-circle track-icon track-icon-active" onClick={this.toggleTrack}></i>
    ) : (
        <i className="fas fa-play-circle track-icon" onClick={this.toggleTrack}></i>
      )
      )
    
    const deleteTrack = (currentUser && currentUser.id === track.user_id) ? (
      <button className="delete-track-button" onClick={() => this.props.openModal('delete-track', track)}>
        <i className="fas fa-trash-alt"></i>
        <p>Delete</p>
      </button> ) : ( null );

    const editTrack = (currentUser && currentUser.id === track.user_id) ? (
      <button className="edit-track-button" onClick={() => this.props.openModal('edit-track', track)}>
        <i className="fas fa-pencil-alt"></i>
        <p>Edit</p>
      </button> ) : ( null );

    return (
      <li className="track-info">
        <div className='image-div'>
          <Link to={`/tracks/${track.id}`}>
            {image}
          </Link>
          <div className="user-track-buttons" onClick={(e) => e.stopPropagation()}>
            {editTrack}
            {deleteTrack}
          </div>
          {icon}
        </div>
        <Link className="track-info-text" to={`/tracks/${track.id}`}>
          <p className="track-name">{track.title}</p>
        </Link>
      </li>
    )
  }
}

const msp = (state) => {
  return {
    currentTrack: state.ui.audio.currentTrack,
    isPlaying: state.ui.audio.isPlaying,
    currentUser: state.entities.users[state.session.id],
  }
}

const mdp = (dispatch) => {
  return {
    fetchPlayingTrack: (id) => dispatch(fetchPlayingTrack(id)),
    toggleTrack: () => dispatch(toggleTrack()),
    openModal: (modal, track) => dispatch(openModal(modal, track)),
  }
}

export default connect(msp, mdp)(UserTrackItem);