import React from 'react';
import { connect } from 'react-router-dom'; 
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.waveRef = React.createRef();
    this.song = this.props.track;
  }

  componentDidMount() {
    debugger
    const wave = this.waveRef.current;
    this.wavesurfer = WaveSurfer.create({
      container: wave,
      waveColor: '#F2F2F2',
      progressColor: '#F65502',
      barWidth: 2,
      height: 150,
      fillParent: true,
      cursorWidth: 0,
      interact: true,
      hideScrollbar: true,
      removeMediaElementOnDestroy: false
    });
    debugger
    if (this.song.id) {
      this.wavesurfer.load(this.song.mp3);
    }
  }

  render() {
    debugger
    return (
      <div ref={this.waveRef} id="waveform" className="waveform"></div>
    )
  }
}


export default WaveForm;