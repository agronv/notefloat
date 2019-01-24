import React from 'react';

class MusicBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentTrack;
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentTrack) {
      let audio = document.getElementById('audio');
      if (this.props.currentTrack.isPlaying) audio.play();
      else audio.pause();
    }
  }

  render() {
    let { currentTrack } = this.props;
    if (!currentTrack) return null;
    
    const togglePlay = currentTrack.isPlaying ? (
      <i className="fas fa-pause toggle-play" onClick={() => this.props.toggleTrack()}></i>) : (
      <i className="fas fa-play toggle-play" onClick={() => this.props.toggleTrack()}></i>);

    const image = currentTrack.photoUrl ? (<img src={currentTrack.photoUrl} className="music-bar-image" />) :
      (<img src={window.defaultTrackPhoto} className="music-bar-image" />)

    return (
      <footer className="music-bar">
        <div className="music-bar-content">
          {togglePlay}
          {image}
          <audio src={currentTrack.mp3} id="audio" type="audio/mp3"></audio>
        </div>
      </footer>
    )
  }
}

export default MusicBar;