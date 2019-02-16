import React from 'react';
import { connect } from 'react-redux';
import { updateUser, clearSessionErrors, fetchCompleteUser } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  handlePhoto(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoUrl: file, photo: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  } 

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[description]', this.state.description);
    if (this.state.photoUrl) {
      formData.append('user[photo]', this.state.photoUrl);
    }
    const that = this;
    this.props.updateUser(this.state.id, formData).then(that.props.closeModal)
    .then(() => {this.props.fetchCompleteUser(this.props.params.userId)});
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value});
    };
  }

  render() {

    let previewPhoto;
    if (this.state.photo) {
      previewPhoto = <img className="image-preview-user" src={this.state.photo}></img>
    }
    else if (this.state.photoUrl) {
      previewPhoto = <img className="image-preview-user" src={this.state.photoUrl}></img>
    }
    else {
      previewPhoto = <img className="image-preview-user" src={window.defaultUserPhoto}></img>
    }

    const submit = this.state.username.length > 0 ? (
      <button className="track-submit">save changes</button>
    ) : (<p className="track-form-protected">save changes</p>)

    const textareVal = this.state.description ? this.state.description : ""

    return (
      <section className="user-form-section" onClick={(e) => e.stopPropagation()}>
        <h2 className="edit-title">Edit Your Profile</h2>
        <form className='user-form' onSubmit={this.handleSubmit}>
          <div className="photo-form">
            {previewPhoto}
            <label htmlFor="photo">
              <p className="photo-input user-input-photo"><i className="fas fa-camera"></i>Image (optional)</p>
              <input type="file" onChange={this.handlePhoto} id="photo" accept="image/*" />
            </label>
          </div>
          <div className="right-side-form-user">
            <label htmlFor="description">
              <p>Description</p>
              <textarea type="text" className="description-input" onChange={this.handleInput("description")} id="description" value={textareVal} />
            </label>
            {submit}
          </div>
        </form>
      </section>
    )
  }
}

const msp = (state) => {
  return {    
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = (dispatch) => {
  return {
    updateUser: (id, user) => dispatch(updateUser(id, user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal()),
    fetchCompleteUser: (id) => dispatch(fetchCompleteUser(id)),
  }
}

export default withRouter(connect(msp, mdp)(UserEdit));