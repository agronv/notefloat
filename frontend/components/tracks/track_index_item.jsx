import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="track-info">
        <div className='image-div'>
        <Link to={`/tracks/${this.props.track.id}`}>
          <img src={this.props.track.photoUrl} alt=""/>
        </Link>
          <i className="fas fa-play-circle track-icon"></i>
        </div>
        <Link to={`/tracks/${this.props.track.id}`}>
          <p>{this.props.track.title}</p>
        </Link>
      </li>
    )
  }
}

export default TrackIndexItem;