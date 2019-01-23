import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
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
        <p>{track.title}</p> 
        <audio src={track.mp3} type="audio/mp3"/>
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