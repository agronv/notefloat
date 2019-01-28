import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  } 

  updateGenre(e) {
    this.setState({ genre: e.target.value });
  } 

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(); 
    formData.append('track[title]', this.state.title);
    formData.append('track[genre]', this.state.genre);
    if (this.state.mp3) {
      formData.append('track[mp3_file]', this.state.mp3);
    }
    if (this.state.photoUrl){
      formData.append('track[photo]', this.state.photoUrl);
    }
    if (this.props.formType === 'edit') {
      const that = this;
      this.props.action(this.state.id, formData).then((result) => {
        that.props.history.push(`/users/${result.track.user_id}`);
      }).then(that.props.closeModal); 
    }
    else {
      this.props.action(formData).then((result) => {
        this.props.history.push(`/tracks/${result.track.id}`);
      });
    }
  }

  handleFile(feild) {
    return (e) => {
      const file = e.target.files[0];
      if (feild === "photoUrl") {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          this.setState({ [feild]: file, photo: fileReader.result });
        };
        if (file) {
          fileReader.readAsDataURL(file);
        }
      }
      else {
        this.setState({ [feild]: file });
      }
    };
  } 

  titleize(word) { 
    return word.split("_").join(" ");
  }

  render() {
    const mp3 = this.props.formType === "edit" ? null : (
      <label htmlFor="track">
        <p className="track-input">choose file to upload*</p>
        <input type="file" onChange={this.handleFile('mp3')} id="track" accept="audio/*"/>
      </label> 
    ) 

    const submit = this.state.title.length > 0 && (this.state.mp3 || this.props.formType === 'edit') ? (
      <button className="track-submit">{this.props.formType}</button>
    ) : ( <p className="track-form-protected">{this.props.formType}</p>)

    let previewPhoto;
    if (this.state.photo) {
      previewPhoto = <img className="image-preview"src={this.state.photo}></img>
    }
    else if (this.state.photoUrl) {
      previewPhoto = <img className="image-preview"src={this.state.photoUrl}></img>
    }
    else {
      previewPhoto = <img className="image-preview" src={window.defaultTrackPhoto}></img>
    }

    const genres = ["alternative_rock", "classic_rock", "classical", "pop", "rap", "techno"].map((genre, i) => {
      return <option value={genre} key={i}>{this.titleize(genre)}</option>;
    })

    return (
      <section className="track-form-section edit-form-section">
        <h2>{this.props.formType}</h2>
        <form className='track-form' onSubmit={this.handleSubmit}>
          <div className="photo-form">
            {previewPhoto}
            <label htmlFor="photo">
                <p className="photo-input"><i className="fas fa-camera"></i>Artwork (optional)</p>
              <input type="file" onChange={this.handleFile("photoUrl")} id="photo" accept="image/*"/>
            </label> 
          </div>
          <div className="right-side-form">
            <label htmlFor="title"> 
              <p>Title*</p>
              <input type="text" className="title-input" onChange={this.updateTitle} id="title" value={this.state.title}/>
            </label> 
            <label htmlFor="genre"> 
              <select
                value={this.state.genre}
                onChange={this.updateGenre}
                className="genre-input"
              >
                {genres}
              </select>
            </label> 
            {mp3}
            {submit}
          </div>
        </form>
      </section>
    )
  }
}

export default withRouter(TrackForm);