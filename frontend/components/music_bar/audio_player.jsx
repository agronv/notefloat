import { toggleTrack, fetchNextTrack } from '../../actions/current_track_actions';
import React from 'react';
import { connect } from 'react-redux';


class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {length: 0, currentTime: 0, volume: 0.5};
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
  }

  componentDidMount() {
    if (this.props.currentTrack.isPlaying) this.audioRef.current.play();
    else this.audioRef.current.pause();
    this.audioRef.current.volume = 0.1;
    this.timeInterval = setInterval(this.handleTimeUpdate, 400);
  }

  componentDidUpdate() {
    if (this.props.currentTrack.isPlaying) this.audioRef.current.play();
    else this.audioRef.current.pause();
  }

  componentWillMount() {
    clearInterval(this.timeInterval);
  }

  handleTimeUpdate() {
    this.setState({
      length: this.audioRef.current.duration,
      currentTime: this.audioRef.current.currentTime,
    });
  }

  setTime(e) {
    this.audioRef.current.currentTime = e.target.value;
    this.setState({ currentTime: e.target.value });
  }

  formatTime(secs) {
    let minutes = Math.floor(secs / 60);
    let finalMinutes = minutes < 60 ? minutes : 0;
    const seconds = Math.floor(secs) % 60;
    const finalSeconds = seconds < 10 ? `:0${seconds}` : `:${seconds}`;

    if (finalMinutes < 10) finalMinutes = `0${finalMinutes}`;
    else finalMinutes = `${finalMinutes}`;

    return finalMinutes + finalSeconds;
  }

  nextTrack() {
    this.props.fetchNextTrack();
  }

  render() {
    let { currentTrack } = this.props;
    let { currentTime, length} = this.state;

    const togglePlay = currentTrack.isPlaying ? (
    <i className="fas fa-pause toggle-play" onClick={() => this.props.toggleTrack()}></i>) : (
    <i className="fas fa-play toggle-play" onClick={() => this.props.toggleTrack()}></i>);
    
    return (
      <>
        { togglePlay }
        <div className="music-time">
          <p className="current-time">{this.formatTime(currentTime)}</p>
          <div className="progress-bar">
            <input type="range" className="music-progress-bar" min="0" max={length} step="0.25" onChange={this.setTime}/>
            <div className="outer-music-bar">
              <div className="inner-music-bar" style={{width: `${100*(currentTime/length) || 1}%`}}></div>
              <div className="progress-ball" style={{ left: `${100 * (currentTime / length) || 1}%` }}></div>
            </div>
          </div>
          <p>{this.formatTime(length)}</p>

        </div>
        <audio src={this.props.source} 
        ref={this.audioRef} 
        onEnded={this.nextTrack}
        loop={false}></audio>
      </>
    )
  }
}

const msp = (state) => {
  return {
    currentTrack: state.ui.currentTrack,
  };
};

const mdp = (dispatch) => {
  return {
    toggleTrack: () => dispatch(toggleTrack()),
    fetchNextTrack: () => dispatch(fetchNextTrack()),
  };
};




export default connect(msp, mdp)(AudioPlayer);