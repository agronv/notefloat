import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './audio_player';

class MusicBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentTrack;
  }

  render() {
    let { currentTrack } = this.props;
    if (!currentTrack) return null;

    const image = currentTrack.photoUrl ? (<img src={currentTrack.photoUrl} className="music-bar-image" />) :
      (<img src={window.defaultTrackPhoto} className="music-bar-image" />)

    return (
      <footer className="music-bar">
        <div className="music-bar-content">
          < AudioPlayer source={currentTrack.mp3} />
          <div className="music-bar-song-info">
            < Link to={`/tracks/${currentTrack.id}`}>
              {image}
            </Link>
            <div className="music-bar-text">
              < Link to={`/users/${currentTrack.user_id}`}>
                <p className="music-bar-artist">{currentTrack.username}</p>
              </Link>
              < Link to={`/tracks/${currentTrack.id}`}>
                <p className="music-bar-title">{currentTrack.title}</p>
              </Link>
            </div>
          </div>
          <audio src={currentTrack.mp3} preloaded="metadata" id="audio" type="audio/mp3"></audio>
        </div>
      </footer>
    )
  }
}

export default MusicBar;