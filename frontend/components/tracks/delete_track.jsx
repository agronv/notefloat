import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { fetchPlayingTrack, toggleTrack } from '../../actions/current_track_actions';
import { destroyTrack } from '../../actions/track_actions';

class DeleteTrack extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTrack = this.toggleTrack.bind(this);
    this.playing = this.playing.bind(this);
    this.paused = this.paused.bind(this);
    this.deleteTrack = this.deleteTrack.bind(this);
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

  deleteTrack(e) {
    e.preventDefault();
    const that = this;
    this.props.destroyTrack(this.props.track.id).then(that.props.closeModal);
  }

  render() {
    const { track } = this.props;

    const image = track.photoUrl ? (<img className="cover-art" src={track.photoUrl} />) :
      (<img className="cover-art" src={window.defaultTrackPhoto} />)

    const icon = this.playing() ? (
      <i className="fas fa-pause-circle delete-playing" onClick={this.toggleTrack}></i>
    ) : (this.paused() ? (
      <i className="fas fa-play-circle delete-paused" onClick={this.toggleTrack}></i>
    ) : (
        <i className="fas fa-play-circle delete-play" onClick={this.toggleTrack}></i>
      )
      )

    return (
      <section className="track-delete-section">
        <h4>Delete Track</h4>
        <div className="main-delete">
        <div className="delete-left">
          {image}
        </div>
        <div className="delete-right">
          <div className="track-delete-info">
            {icon}
            <p>{track.title}</p>
          </div>
          <div className="track-delete-buttons">
            <button className="cancel-button" onClick={this.props.closeModal}>Cancel</button>
            <button className="delete-button" onClick={this.deleteTrack}>Delete forever</button>
          </div>
        </div>
        </div>
      </section>
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
    closeModal: () => dispatch(closeModal()),
    fetchPlayingTrack: (id) => dispatch(fetchPlayingTrack(id)),
    toggleTrack: () => dispatch(toggleTrack()),
    destroyTrack: (id) => dispatch(destroyTrack(id)),
  }
}

export default connect(msp, mdp)(DeleteTrack);