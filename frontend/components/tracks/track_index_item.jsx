import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/tracks/${this.props.track.id}`}>
          <img src={this.props.track.photoUrl} alt=""/>
          <p>{this.props.track.title}</p>
        </Link>
        <h1>hey</h1>
      </li>
    )
  }
}

export default TrackIndexItem;