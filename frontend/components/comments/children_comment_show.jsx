import React from 'react';
import { connect } from 'react-redux';
import { childrenComments } from '../../reducers/selectors/selectors';
import CommentChildren from './children_comment_show';
import { Link } from 'react-router-dom';
import { openModal } from "../../actions/modal_actions";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      isShowing: false,
    };
    this.formRef = React.createRef();
    this.changeForm = this.changeForm.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  createComment(e) {
    e.preventDefault();
    const comment = { body: this.state.body, parent_comment_id: this.props.comment.id};
    this.props.createComment(this.props.comment.track_id, comment);
    this.setState({ body: "", isShowing: false });
  }

  handleCommentChange(e) {
    this.setState({ body: e.target.value });
  }

  changeForm() {
    if (this.props.loggedIn) {
      this.setState({ isShowing: !this.state.isShowing });
      this.formRef.current.focus();
    }
    else this.props.openModal({modal: 'login'});
  }

  render() {
    const { comment, childrenComments, loggedIn } = this.props;

    const commentImage = comment.photoUrl ? (
      <img src={comment.photoUrl} className="comment-image"></img>) : (
        <img src={window.defaultUserPhoto} className="comment-image"></img>)
    const childrenCommentz = childrenComments ? (childrenComments.map(childComment => {
      return <li className="child-comment-li" key={childComment.id}>
        <CommentChildren comment={childComment} deleteComment={this.props.deleteComment} createComment={this.props.createComment}/>
      </li>
    })) : (null);

    const formClass = this.state.isShowing ? "small-comment-form-section" : "invisible"

    const deleter = (loggedIn && loggedIn === comment.user_id) ? (
      <button onClick={() => this.props.deleteComment(comment.track_id, comment.id)} className="reply-button-delete">
        <i className="fas fa-trash-alt"></i>
        <p>Delete</p>
      </button>) : ( null )

    const replying = comment.parentUserId ? (
      <Link className="comment-parent-user-info" to={`/users/${comment.parentUserId}`}>@{comment.parentUserName}: </Link>
    ) : ( null )

    return (
      <>
        <div className="comment-div">
          <div className="comment-info">
            <Link to={`/users/${comment.user_id}`}>
              {commentImage}
            </Link>  
            <div className="comment-text">
              <Link className="comment-user-info" to={`/users/${comment.user_id}`}>{comment.username}</Link>
              <p>
                {replying}
                {comment.body}
              </p>
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
        <ul className="comment-list">
          {childrenCommentz}
        </ul>
        <div className={formClass}>
          <form onSubmit={this.createComment} className="small-comment-form">
            <label className="actual-input">
              <Link className="comment-parent-user-info" to={`/users/${comment.user_id}`}>@{comment.username}: </Link>
              <input type="text"
                className="small-comment-input"
                value={this.state.body}
                ref={this.formRef}
                placeholder="Write a comment"
                onChange={this.handleCommentChange} />
            </label>
          </form>
          <button onClick={this.changeForm} className="cancel-button">
            <i className="fas fa-times"></i>
            <p>Cancel</p>
          </button>
        </div>
      </>
    )
  }
}

const msp = (state, ownProps) => {
  return {
    childrenComments: childrenComments(state.entities.comments, ownProps.comment.track_id, ownProps.comment.id) || [],
    loggedIn: state.session.id,
  }
}

const mdp = (dispatch) => {
  return {
    openModal: (data) => dispatch(openModal(data)),
  }
}

export default connect(msp, mdp)(Comment);