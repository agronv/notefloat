import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayingTrack, toggleTrack } from '../../actions/current_track_actions';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTrack = this.toggleTrack.bind(this);
    this.playing = this.playing.bind(this);
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

  render() {
    const { track } = this.props;

    const image = track.photoUrl ? (<img className="cover-art" src={track.photoUrl} />) :
      (<img className="cover-art" src={window.defaultTrackPhoto} />)


    const icon = this.playing() ? (
      <i className="fas fa-pause-circle track-icon track-icon-active" onClick={this.toggleTrack}></i>
    ) : (
      <i className="fas fa-play-circle track-icon" onClick={this.toggleTrack}></i>
    )

    return (
      <li className="track-info">
        <div className='image-div'>
          <Link to={`/tracks/${track.id}`}>
            { image }
          </Link>
          {icon}
        </div>

        <Link className="track-info-text"to={`/tracks/${track.id}`}>
          <p className="track-name">{track.title}</p>
        </Link>
        <Link className="track-info-text"to={`/users/${track.id}`}>
          <p className="user-info">{track.username}</p>
        </Link>
      </li>
    )
  }
}

const msp = (state) => {
  return {
    currentTrack: state.ui.audio.currentTrack,
    isPlaying: state.ui.audio.isPlaying,
  }
}

const mdp = (dispatch) => {
  return {
    fetchPlayingTrack: (id) => dispatch(fetchPlayingTrack(id)),
    toggleTrack: () => dispatch(toggleTrack()),
  }
}

export default connect(msp,mdp)(TrackIndexItem);