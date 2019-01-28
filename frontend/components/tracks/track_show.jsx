import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack, destroyTrack } from '../../actions/track_actions';
import { fetchPlayingTrack, toggleTrack } from '../../actions/current_track_actions';
import { fetchUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.destroyTrack = this.destroyTrack.bind(this);
    this.playing = this.playing.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  destroyTrack() {
    this.props.destroyTrack(this.props.track.id).then(() => {
      this.props.history.push("/tracks");
    });
  }

  handleChange(e) {
    e.preventDefault();
    let {currentTrack, track} = this.props;
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
    if (!this.props.track) return null;
    const { track, artist, currentUser } = this.props;

    const icon = this.playing() ? <i className="fas fa-pause-circle big-icon" onClick={this.handleChange} /> : 
      <i className="fas fa-play-circle big-icon" onClick={this.handleChange} />;

    const image = track.photoUrl ? (<img src={track.photoUrl} id="album-cover" />) :
      (<img src={window.defaultTrackPhoto} id="album-cover" />)
    
    return (
      <div className="track-show">
      <section className="track-section">
        <div className='song-info'>
          {icon}
          <div className="text-info">
            <p className="title-info">{track.title}</p>  
            <Link className="artist-info" to={`/users/${track.user_id}`}>{track.username}</Link>  
          </div>
        </div>
        {image}
      </section>
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  
  const track = state.entities.tracks[ownProps.match.params.trackId];
  let artist;
  if (track) artist = state.entities.users[track.user_id];
  return {
    track,
    artist,
    currentUser: state.entities.users[state.session.id],
    currentTrack: state.ui.audio.currentTrack,
    isPlaying: state.ui.audio.isPlaying,
  }
}

const mdp = (dispatch) => {
  return {
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    destroyTrack: (id) => dispatch(destroyTrack(id)),
    fetchPlayingTrack: (id) => dispatch(fetchPlayingTrack(id)),
    toggleTrack: () => dispatch(toggleTrack()),
  }
}

export default connect(msp, mdp)(TrackShow);