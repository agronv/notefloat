import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  handleChange(e) {
    e.preventDefault();
    let audio = document.getElementById('audio');
    if (audio.paused) audio.play();
    else audio.pause();
  }

  render() {
    if (!this.props.track) {
      return null;
    }
    const { track } = this.props;
    const editLink = `/tracks/edit/${track.id}`;
    return (
      <div>
        <img src={track.photoUrl} alt=""/>
        <p onClick={this.handleChange}>{track.title}</p> 
        <audio src={track.mp3} id="audio" type="audio/mp3"/>
        <Link to={editLink} >Edit</Link> 
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    track: state.entities.tracks[ownProps.match.params.trackId],
  }
}

const mdp = (dispatch) => {
  return {
    fetchTrack: (id) => dispatch(fetchTrack(id)),
  }
}

export default connect(msp, mdp)(TrackShow);