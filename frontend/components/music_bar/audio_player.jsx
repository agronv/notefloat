import { toggleTrack, 
        fetchNextTrack, 
        nextInQueue, 
        prevInQueue, 
        fetchRandomNextTrack, 
        handleTimeUpdate } 
        from '../../actions/current_track_actions';
import React from 'react';
import { connect } from 'react-redux';


class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {length: 0, currentTime: 0, volume: 0.5, loop: false, shuffle: false, mute: false};
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.setTimeFromProps = this.setTimeFromProps.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.prevTrack = this.prevTrack.bind(this);
    this.changeLoop = this.changeLoop.bind(this);
    this.changeShuffle = this.changeShuffle.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
  }

  componentDidMount() {
    if (this.props.isPlaying) this.audioRef.current.play();
    else this.audioRef.current.pause();
    this.audioRef.current.volume = this.state.volume;
    if (this.props.isPlaying) {
      this.timeInterval = setInterval(this.handleTimeUpdate, 440);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isPlaying) this.audioRef.current.play();
    else this.audioRef.current.pause();
    if (this.props.waveTime !== prevProps.waveTime) {
      this.setTimeFromProps(this.props.waveTime);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  handleTimeUpdate() {
    if (this.props.isPlaying) {
      const currentTime = this.audioRef.current.currentTime;
      const length = this.audioRef.current.duration;
      this.setState({
        length: length,
        currentTime: currentTime,
      });
      this.props.handleTimeUpdate(currentTime, length);
    }
  }

  setTime(e) {
    this.audioRef.current.currentTime = e.target.value;
    this.setState({ currentTime: e.target.value });
  }
  
  setTimeFromProps(time) {
    this.audioRef.current.currentTime = time;
    this.setState({ currentTime: time });
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
    const { queue, queuePos, currentTrack, fetchNextTrack, nextInQueue, fetchRandomNextTrack } = this.props;
    if (this.state.loop) this.audioRef.current.currentTime = 0;
    else if (queuePos === queue.length - 1) {
      if (this.state.shuffle) fetchRandomNextTrack();
      else fetchNextTrack(currentTrack.genre);
    }
    else nextInQueue(queue[queuePos+1]);
  }

  changeLoop() {
    if (this.state.loop) this.setState({ loop: false});
    else this.setState({ loop: true });
  }

  changeShuffle() {
    if (this.state.shuffle) this.setState({ shuffle: false});
    else this.setState({ shuffle: true });
  }

  changeVolume(e) {
    this.setState({volume: e.target.value});
    this.audioRef.current.volume = this.state.volume;
  }

  prevTrack() {
    const { queue, queuePos, prevInQueue } = this.props;
    if (queuePos === 0 || this.audioRef.current.currentTime > 1.5 || this.state.loop) {
      this.audioRef.current.currentTime = 0;
    }
    else prevInQueue(queue[queuePos-1]);
  }

  toggleMute() {
    if (this.state.mute) {
      this.setState({mute: false, volume: 0.5});
      this.audioRef.current.volume = 0.5;
    }
    else {
      this.setState({ mute: true, volume: 0 });
      this.audioRef.current.volume = 0;
    }
  }

  render() {
    let { currentTrack, isPlaying } = this.props;
    let { currentTime, length} = this.state;

    const togglePlay = isPlaying ? (
    <i className="fas fa-pause toggle-play" onClick={this.props.toggleTrack}></i>) : (
    <i className="fas fa-play toggle-play" onClick={this.props.toggleTrack}></i>);

    const volumeButton = this.state.mute ? (
      <i className="fas fa-volume-mute volume-button" onClick={this.toggleMute}></i>) : (
      <i className="fas fa-volume-up volume-button" onClick={this.toggleMute}></i>
    )
    
    const loopClass = this.state.loop ? "button-active" : ""
    const shuffleClass = this.state.shuffle ? "button-active" : ""
    return (
      <>
        <div className="music-buttons">
          <i className="fas fa-step-backward" onClick={this.prevTrack}></i>
          { togglePlay }
          <i className="fas fa-step-forward" onClick={this.nextTrack}></i>
          <i className={`fas fa-random ${shuffleClass}`} onClick={this.changeShuffle}></i>
          <i className={`fas fa-undo ${loopClass}`} onClick={this.changeLoop}></i>
        </div>
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
        <div className="volume-div">
          {volumeButton}
          <div className="volume-bar-div">
            <input type="range" className="volume-bar" min="0" max="1" step="0.01" onChange={this.changeVolume} value={this.state.volume}/>
          </div>
        </div>
        <audio src={currentTrack.mp3} 
        ref={this.audioRef} 
        onEnded={this.nextTrack}
        loop={this.state.loop}></audio>
      </>
    )
  }
}

const msp = (state) => {
  return {
    currentTrack: state.ui.audio.currentTrack,
    isPlaying: state.ui.audio.isPlaying,
    queue: state.ui.audio.queue,
    queuePos: state.ui.audio.queuePos,
    waveTime: state.ui.audio.waveTime,
  };
};

const mdp = (dispatch) => {
  return {
    toggleTrack: () => dispatch(toggleTrack()),
    fetchNextTrack: (genre) => dispatch(fetchNextTrack(genre)),
    nextInQueue: (id) => dispatch(nextInQueue(id)),
    prevInQueue: (id) => dispatch(prevInQueue(id)),
    fetchRandomNextTrack: () => dispatch(fetchRandomNextTrack()),
    handleTimeUpdate: (time, length) => dispatch(handleTimeUpdate(time, length)),
  };
};

export default connect(msp, mdp)(AudioPlayer);