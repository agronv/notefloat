import React from 'react';
import { connect }from 'react-redux';
import { createComment, destroyComment } from '../../actions/comment_actions';
import { childrenComments } from '../../reducers/selectors/selectors';
import { Link } from 'react-router-dom';
import ChildrenCommentShow from './children_comment_show';
import { openModal } from "../../actions/modal_actions";

class ParentCommentShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "",
    isShowing: false,
  };
    this.changeForm = this.changeForm.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  createComment(e) {
    e.preventDefault();
    const that = this;
    const comment = { body: this.state.body, parent_comment_id: this.props.comment.id };
    this.props.createComment(this.props.comment.track_id, comment).then(() => {
      that.setState({ body: "", isShowing: false });
    });
  }

  handleCommentChange(e) {
    this.setState({ body: e.target.value });
  }

  changeForm() {
    if (this.props.loggedIn) this.setState({ isShowing: !this.state.isShowing });
    else this.props.openModal({modal: 'login'});
  }

  render() {
    const { comment, childrenComments, loggedIn } = this.props;
    const commentImage = comment.photoUrl ? (
      <img src={comment.photoUrl} className="comment-image"></img> ) : (
      <img src={window.defaultUserPhoto} className="comment-image"></img>)
    
    const childrenCommentz = childrenComments.map( childComment => {
      return <li className="child-comment-li" key={childComment.id}>
        <ChildrenCommentShow comment={childComment} />
      </li>
    })

    const form = this.state.isShowing ? (
      <div className="small-comment-form-section parent-form">
        <form onSubmit={this.createComment} className="small-comment-form">
          <label className="actual-input">
            <Link className="comment-parent-user-info" to={`/users/${comment.user_id}`}>@{comment.username}: </Link>
            <input type="text"
              className="small-comment-input"
              value={this.state.body}
              placeholder="Write a comment"
              onChange={this.handleCommentChange} />
          </label>
        </form>
      </div>) : (null)

    const deleter = (loggedIn && loggedIn === comment.user_id) ? (
      <button onClick={() => this.props.destroyComment(comment.track_id, comment.id)} className="reply-button-delete">
        <i className="fas fa-trash-alt"></i>
        <p>Delete</p>
      </button>) : ( null )

    return (
      <>
        <div className="comment-div">
          <div className="comment-info">
            {commentImage}
            <div className="comment-text">
              <Link className="comment-user-info" to={`/users/${comment.user_id}`}>{comment.username}</Link>  
              <p>{comment.body}</p>
            </div>
          </div>
          <div className="edit-buttons">
            {deleter}
            <button onClick={this.changeForm} className="reply-button">
              <i className="fas fa-reply"></i>
              <p>Reply</p>
            </button>
          </div>
        </div>
        <ul className="children-comment">
          {childrenCommentz}
        </ul>
        {form}
      </>
    )
  }
}

const msp = (state, ownProps) => {
  return {
    childrenComments: childrenComments(state.entities.comments, ownProps.comment.track_id, ownProps.comment.id),
    loggedIn: state.session.id,
  }
}

const mdp = (dispatch) => {
  return {
    createComment: (track_id, comment) => dispatch(createComment(track_id, comment)),
    destroyComment: (track_id, id) => dispatch(destroyComment(track_id, id)),
    openModal: (data) => dispatch(openModal(data)),
  }
}

export default connect(msp, mdp)(ParentCommentShow);