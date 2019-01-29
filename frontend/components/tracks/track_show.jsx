import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack, destroyTrack } from '../../actions/track_actions';
import { fetchPlayingTrack, toggleTrack } from '../../actions/current_track_actions';
import { createComment, destroyComment} from '../../actions/comment_actions';
import { trackComments } from '../../reducers/selectors/selectors';
import { fetchUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { commentBody: ""};
    this.handleChange = this.handleChange.bind(this);
    this.destroyTrack = this.destroyTrack.bind(this);
    this.playing = this.playing.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.createComment = this.createComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  destroyTrack() {
    this.props.destroyTrack(this.props.track.id).then(() => {
      this.props.history.push("/tracks");
    });
  }

  handleChange(e) {
    e.preventDefault();
    let {currentTrack, track} = this.props;
    if (!currentTrack || track.id !== currentTrack.id) {
      this.props.fetchPlayingTrack(track.id);
    }
    else {
      this.props.toggleTrack();
    }
  }

  playing() {
    const { currentTrack, track, isPlaying } = this.props;
    if (currentTrack) {
      if (currentTrack.id === track.id && isPlaying) {
        return true;
      } 
    }
    return false;
  }

  handleCommentChange(e) {
    this.setState({ commentBody: e.target.value });
  }

  createComment() {
    const that = this;
    debugger
    this.props.createComment(this.props.track.id, this.state).then( () => {
      that.setState({ commentBody: ""});
    });
  }

  render() {
    if (!this.props.track) return null;
    const { track, artist, currentUser, comments } = this.props;

    const icon = this.playing() ? <i className="fas fa-pause-circle big-icon" onClick={this.handleChange} /> : 
      <i className="fas fa-play-circle big-icon" onClick={this.handleChange} />;

    const image = track.photoUrl ? (<img src={track.photoUrl} id="album-cover" />) :
      (<img src={window.defaultTrackPhoto} id="album-cover" />)

    const userImage = artist.photoUrl ? (<img src={artist.photoUrl} className="user-track-photo" />) :
      (<img src={window.defaultUserPhoto} className="user-track-photo" />)

    const commentz = comments.map( (comment) => {
      return <li key={comment.id}>{comment.body}</li>
    });
    
    return (
      <div className="track-show">
        <section className="track-section">
          <div className='song-info'>
            {icon}
            <div className="text-info">
              <p className="title-info">{track.title}</p>  
              <Link className="artist-info" to={`/users/${artist.id}`}>{artist.username}</Link>  
            </div>
          </div>
          {image}
        </section>
        <div className="track-users-section">
          <Link to={`/users/${artist.id}`}>{userImage}</Link>  
          <Link to={`/users/${artist.id}`}>{artist.username}</Link>  
        </div>
        <section className="comments-section">
          <form onSubmit={this.createComment}>
            <input type="text" 
            value={this.state.commentBody} 
            placeholder="Write a comment"
            onChange={this.handleCommentChange}/>
          </form>
          <ul>
            {commentz}
          </ul>
        </section>
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  
  const track = state.entities.tracks[ownProps.match.params.trackId];
  let artist;
  if (track) artist = state.entities.users[track.user_id];
  return {
    track,
    artist,
    currentUser: state.entities.users[state.session.id],
    comments: trackComments(state.entities.tracks, ownProps.match.params.trackId),
    currentTrack: state.ui.audio.currentTrack,
    isPlaying: state.ui.audio.isPlaying,
  }
}

const mdp = (dispatch) => {
  return {
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    destroyTrack: (id) => dispatch(destroyTrack(id)),
    fetchPlayingTrack: (id) => dispatch(fetchPlayingTrack(id)),
    toggleTrack: () => dispatch(toggleTrack()),
    createComment: (trackId, comment) => dispatch(createComment(trackId, comment)),
    destroyComment: (trackId, id) => dispatch(destroyComment(trackId, id)),
  }
}

export default connect(msp, mdp)(TrackShow);