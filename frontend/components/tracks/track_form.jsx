import React from 'react';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone' 

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.state.loading = false;
    this.state.changedPhoto = false;
    this.formRef = React.createRef();
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
    this.setState({ loading: true });
    const formData = new FormData(); 
    formData.append('track[title]', this.state.title);
    formData.append('track[genre]', this.state.genre);
    formData.append('track[length]', this.state.length);
    if (this.state.mp3) {
      formData.append('track[mp3_file]', this.state.mp3);
    }
    if (this.state.changedPhoto){
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
      if (feild === "photoUrl") {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          this.setState({ [feild]: file, photo: fileReader.result, changedPhoto: true });
        };
        if (file) {
          fileReader.readAsDataURL(file);
        }
      }
      else {
        let file;
        if (e.target) {
          e.stopPropagation();
          file = e.target.files[0];
        } else {
          file = e[0];
        }
        const objectURL = URL.createObjectURL(file);
        const audio = new Audio([objectURL]); 
        const that = this;
        var timer = setInterval(function () {
          if (audio.readyState === 4) {
            that.setState({ length: Math.floor(audio.duration)});
            clearInterval(timer);
          }
        }, 500);
        this.setState({ [feild]: file });
        this.formRef.current.classList.add("visible");
        let trackUpload = document.getElementsByClassName("track-upload")[0];
        trackUpload.classList.add("smaller");
      }
    };
  } 

  titleize(word) { 
    return word.split("_").join(" ");
  }

  render() {
    const loading = this.state.loading ? (<div className="loader"></div>) : (null);

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

    if (this.props.formType === "edit") {
      return (
        <section className="track-form-section" onClick={(e) => e.stopPropagation()}>
          <h2>Edit Track</h2>
          <form className='track-form' onSubmit={this.handleSubmit}>
            <div className="photo-form">
              {previewPhoto}
              { loading }
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
                className="genre-input">
                  {genres}
                </select>
              </label> 
              {submit}
            </div>
          </form>
        </section>
      )
    } else {
        return (
          <section className="upload-form-section" onClick={(e) => e.stopPropagation()}
          style={{height: `${window.innerHeight-45}px`}}>
            <h2>Upload Track</h2>
            <form className='upload-form' onSubmit={this.handleSubmit}>
              <Dropzone onDrop={this.handleFile("mp3")}>
                {({ getRootProps, getInputProps }) => {
                  return (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="track-upload">
                        <h4>Drag and drop your tracks here</h4>
                        <label htmlFor="track">
                          <p className="track-input">choose file to upload*</p>
                        </label> 
                      </div>
                    </div>
                  )
                }}
              </Dropzone>
              <div id="bottom-form" ref={this.formRef} >
                <div className="photo-form">
                  {previewPhoto}
                  {loading}
                  <label htmlFor="photo">
                    <p className="photo-input"><i className="fas fa-camera"></i>Artwork (optional)</p>
                    <input type="file" onChange={this.handleFile("photoUrl")} id="photo" accept="image/*" />
                  </label>
                </div>
                <div className="right-side-form">
                  <label htmlFor="title">
                    <p>Title*</p>
                    <input type="text" className="title-input" onChange={this.updateTitle} id="title" value={this.state.title} />
                  </label> 
                  <label htmlFor="genre">
                    <select
                      value={this.state.genre}
                      onChange={this.updateGenre}
                      className="genre-input">
                      {genres}
                    </select>
                  </label>
                  {submit}
                </div>
              </div>
            </form>
          </section>
      )
    }
  }
}

export default withRouter(TrackForm);