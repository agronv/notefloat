import React from 'react';
import { connect } from 'react-redux'; 
import waveSurfer from 'wavesurfer.js';
import { receiveNextTrack, setWaveTime } from '../../actions/current_track_actions';

class WaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.waveRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const wave = this.waveRef.current;
    this.waveSurfer = waveSurfer.create({
      container: wave,
      waveColor: '#F2F2F2',
      progressColor: '#F65502',
      barWidth: 2,
      height: 300,
      fillParent: true,
      cursorWidth: 0,
      interact: true,
      autoCenter: true,
      closeAudioContext: true,
      hideScrollbar: true,
      partialRender: true,
      removeMediaElementOnDestroy: true,
    });
    // debugger
    this.waveSurfer.load(this.props.track.mp3);
    // debugger
  }

  componentWillUnmount() {
    this.waveSurfer.destroy();
    this.waveSurfer = null;
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.currentTrack && this.props.track.id === this.props.currentTrack.id) {
      if (prevProps.time !== this.props.time) {
        this.waveSurfer.seekTo(this.props.time / this.props.length);
      }
    }
    else {
      this.waveSurfer.seekTo(0);
    }
  }
  
  handleChange(e) {
    if (this.props.currentTrack.id !== this.props.track.id) {
      this.props.receiveNextTrack(this.props.track);
    }
    this.props.setWaveTime(this.waveSurfer.getCurrentTime());
    this.waveSurfer.un('seek', this.handleChange);
  }

  handleClick(e) {
    this.waveSurfer.on('seek', this.handleChange);
  }

  render() {
    return (
      <div onClick={this.handleClick} ref={this.waveRef} id="waveform" className="waveform"></div>
    )
  }
}

const msp = (state) => {
  return {
    currentTrack: state.ui.audio.currentTrack,
    isPlaying: state.ui.audio.isPlaying,
    time: state.ui.audio.time,
    length: state.ui.audio.length,
  }
}

const mdp = (dispatch) => {
  return {
    receiveNextTrack: (track) => dispatch(receiveNextTrack(track)),
    setWaveTime: (time) => dispatch(setWaveTime(time)),
  }
}

export default connect(msp, mdp)(WaveForm);