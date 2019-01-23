import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack, updateTrack } from '../../actions/track_actions';
import TrackForm from './track_form';


class TrackEdit extends React.Component {

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  render() {
    const { action, formType, track } = this.props;
    if (!track) return null;
    
    return (
      <TrackForm
        action={action}
        formType={formType}
        track={track} />
    );
  }
}

const msp = (state, ownprops) => {
  let track =  state.entities.tracks[ownprops.match.params.trackId];
  if (track) track.photo = null;
  return {
    track,
    formType: "edit",
  };
};

const mdp = (dispatch) => {
  return {
    action: (track) => dispatch(updateTrack(track)),
    fetchTrack: (id) => dispatch(fetchTrack(id)),
  };
};

export default connect(msp, mdp)(TrackEdit);
