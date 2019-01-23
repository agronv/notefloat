import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const tracks = this.props.tracks.map((track) =>
    {
      return < TrackIndexItem track={track} key={track.id} />
    });
    return (
      <section className="tracks-section">
        <h1>All Songs</h1>
        <ul className="album-covers">
          {tracks}
        </ul>
      </section>
    )
  }
}

const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks),
  }
}

const mdp = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
  }
}

export default connect(msp, mdp)(TrackIndex)

