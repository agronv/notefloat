import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  render() {
    return (
      <div>
        <img src={this.props.track.photoUrl} alt=""/>
        <p>{this.props.track.title}</p>
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