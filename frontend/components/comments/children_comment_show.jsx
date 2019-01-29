import React from 'react';
import { connect } from 'react-redux';
import { createComment, destroyComment } from '../../actions/comment_actions';
import { childrenComments } from '../../reducers/selectors/selectors';

class ChildrenCommentShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      isShowing: false,
    };
    this.changeForm = this.changeForm.bind(this);
    this.createComment = this.createComment.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  createComment() {
    const that = this;
    const comment = { body: this.state.body, parent_comment_id: this.props.comment.id};
    this.props.createComment(this.props.track.id, comment).then(() => {
      that.setState({ body: "", isShowing: false });
    });
  }

  handleCommentChange(e) {
    this.setState({ body: e.target.value });
  }

  changeForm() {
    this.setState({ isShowing: !this.props.isShowing });
  }

  render() {
    const { comment, childrenComments } = this.props;
    const commentImage = comment.photoUrl ? (
      <img src={comment.photoUrl} className="comment-image"></img>) : (
        <img src={window.defaultUserPhoto} className="comment-image"></img>)

    const childrenCommentz = childrenComments.map(childComment => {
      return < ChildrenCommentShow comment={childComment} />
    })

    const form = this.state.isShowing ? (
      <form onSubmit={this.createComment}>
        <input type="text"
          className="small-comment-form"
          value={this.state.body}
          placeholder="Write a comment"
          onChange={this.handleCommentChange} />
      </form>
    ) : (null)

    return (
      <li key={comment.id}>
        {commentImage}
        <p>{comment.username}</p>
        <p>{comment.body}</p>
        <button onClick={this.changeForm}>Reply</button>
        <ul>
          {childrenCommentz}
        </ul>
        {form}
      </li>
    )
  }
}

const msp = (state, ownProps) => {
  return {
    childrenComments: childrenComments(state.entities.comments, ownProps.comment.track_id, ownProps.comment.id),
  }
}

const mdp = (dispatch) => {
  return {
    createComment: (track_id, comment) => dispatch(createComment(track_id, comment)),
    destroyComment: (track_id, id) => dispatch(destroyComment(track_id, id)),
  }
}

export default connect(msp, mdp)(ChildrenCommentShow);