import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack, destroyTrack } from '../../actions/track_actions';
import { fetchPlayingTrack, toggleTrack, receivePlayingTrack } from '../../actions/current_track_actions';
import { createComment, destroyComment} from '../../actions/comment_actions';
import { trackComments } from '../../reducers/selectors/selectors';
import { fetchUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import ParentCommentShow from '../comments/parent_comment_show';
import WaveForm from './wave_form';
import { openModal } from "../../actions/modal_actions";
import { randomBackgroundColor } from '../../utils/random_color';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", commentCount: 0};
    this.handleChange = this.handleChange.bind(this);
    this.destroyTrack = this.destroyTrack.bind(this);
    this.playing = this.playing.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.createComment = this.createComment.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.background1 = randomBackgroundColor();
    this.background2 = randomBackgroundColor();
  }

  componentDidMount() {
    const that = this;
    this.props.fetchTrack(this.props.match.params.trackId).then((result) => {
      if (result.comments) {
        that.setState({commentCount: Object.keys(result.comments).length});
      }
    });
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
      this.props.receivePlayingTrack(track);
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
    this.setState({ body: e.target.value });
  }

  createComment(e) {
    e.preventDefault();
    const that = this;
    this.props.createComment(this.props.track.id, {body: this.state.body} ).then( () => {
      const newCount = that.state.commentCount+1;
      that.setState({ body: "", commentCount: newCount});
    });
  }

  checkLoggedIn() {
    if (!this.props.currentUser) {
      this.props.openModal({modal: 'login'});
    }
  }

  render() {
    if (!(this.props.track && this.props.track.mp3) || !this.props.artist) return null;
    const { track, artist, currentUser, comments } = this.props;

    const icon = this.playing() ? <i className="fas fa-pause-circle big-icon" onClick={this.handleChange} /> : 
      <i className="fas fa-play-circle big-icon" onClick={this.handleChange} />;

    const image = track.photoUrl ? (<img src={track.photoUrl} id="album-cover" />) :
      (<img src={window.defaultTrackPhoto} id="album-cover" />)

    const artistImage = artist.photoUrl ? (<img src={artist.photoUrl} className="user-track-photo" />) :
      (<img src={window.defaultUserPhoto} className="user-track-photo" />)

    const userImage = currentUser && currentUser.photoUrl ? (<img src={currentUser.photoUrl} className="currentUser-track-photo" />) :
      (<img src={window.defaultUserPhoto} className="currentUser-track-photo" />)

    const commentz = comments.map( (comment) => {
      return <li className="parent-comment-li" key={comment.id}>
        <ParentCommentShow comment={comment} />
      </li>
    });

    const backgroundColor = {
      background: `linear-gradient(to bottom right, #${this.background1}, #${this.background2})`
    }
    
    return (
      <div className="track-show">
        <section className="track-section" style={backgroundColor}>
          <div className="left-side-show">
            <div className='song-info'>
              {icon}
              <ul className="text-info">
                <li className="title-info">{track.title}</li>  
                <li>
                  <Link className="artist-info" to={`/users/${artist.id}`}>{artist.username}</Link>  
                </li>
              </ul>
            </div>
            < WaveForm track={track} />
          </div>
          {image}
        </section>
        <section className="second-part">
          <div className="comment-form-section">
            {userImage}
            <form onSubmit={this.createComment} onClick={this.checkLoggedIn}className="comment-form">
              <input type="text" 
              className="big-comment-form"
              value={this.state.body} 
              placeholder="Write a comment"
              onChange={this.handleCommentChange}/>
            </form>
          </div>
          <div className="commenting-section">
            <div className="track-users-section">
              <Link to={`/users/${artist.id}`}>{artistImage}</Link>  
              <Link to={`/users/${artist.id}`}>{artist.username}</Link>  
            </div> 
            <div className="comments-section">
              <p className="comment-count">
                <i className="fas fa-comment"></i> {this.state.commentCount} comments
              </p>
              <ul>
                {commentz}
              </ul>
            </div>
          </div>
        </section>
        <div className="comment-bottom">
          <div className="horizonal-line"></div>
            <i className="fab fa-soundcloud comment-cloud"></i>
          <div className="horizonal-line"></div>
        </div>
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
    comments: trackComments(state.entities.comments, ownProps.match.params.trackId),
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
    receivePlayingTrack: (track) => dispatch(receivePlayingTrack(track)),
    toggleTrack: () => dispatch(toggleTrack()),
    createComment: (trackId, comment) => dispatch(createComment(trackId, comment)),
    destroyComment: (trackId, id) => dispatch(destroyComment(trackId, id)),
    openModal: (data) => dispatch(openModal(data)),
  }
}

export default connect(msp, mdp)(TrackShow);