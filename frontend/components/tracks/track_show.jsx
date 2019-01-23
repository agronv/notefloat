import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import { fetchUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { playing: false};
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  handleChange(e) {
    e.preventDefault();
    let audio = document.getElementById('audio');
    if (audio.paused) {
      audio.play();
      this.setState({ playing: true});
    }
    else {
      audio.pause();
      this.setState({ playing: false });
    }
  }

  render() {
    if (!this.props.track) {
      return null;
    }
    const { track, artist, currentUser } = this.props;

    const icon = this.state.playing ? <i className="fas fa-pause-circle big-icon" onClick={this.handleChange} /> : 
      <i className="fas fa-play-circle big-icon" onClick={this.handleChange} />;
    const edit = currentUser && currentUser.id === artist.id ? (
      <Link to={`/tracks/edit/${track.id}`} >Edit</Link> ) : null;
    return (
      <div className="track-show">
      <section className="track-section">
        <div className='song-info'>
          {icon}
          <div className="text-info">
            <p className="title-info">{track.title}</p>  
            <p className="artist-info">{artist.username}</p>  
          </div>
        </div>
        <img src={track.photoUrl} id="album-cover"/>
      </section>
        {edit}
        <audio src={track.mp3} id="audio" type="audio/mp3"/>
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
  }
}

const mdp = (dispatch) => {
  return {
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
  }
}

export default connect(msp, mdp)(TrackShow);