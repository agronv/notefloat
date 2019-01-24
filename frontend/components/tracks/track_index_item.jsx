import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { track } = this.props;

    const image = track.photoUrl ? (<img className="cover-art" src={track.photoUrl} />) :
      (<img className="cover-art" src={window.defaultTrackPhoto} />)

    return (
      <li className="track-info">
        <div className='image-div'>
          <Link to={`/tracks/${track.id}`}>
            { image }
          </Link>
            <i className="fas fa-play-circle track-icon"></i>
        </div>
        <Link className="track-info-link"to={`/tracks/${track.id}`}>
          {track.title}
        </Link>
        <Link className="track-info-link"to={`/users/${track.id}`}>
          <p className="user-info">{track.username}</p>
        </Link>
      </li>
    )
  }
}

export default TrackIndexItem;