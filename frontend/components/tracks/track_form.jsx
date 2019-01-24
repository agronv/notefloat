import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  } 

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();  
    formData.append('track[title]', this.state.title);
    if (this.state.photoUrl){
      formData.append('track[photo]', this.state.photoUrl);
    }
    if (this.state.mp3){
      formData.append('track[mp3_file]', this.state.mp3);
    }
    this.props.action(formData);
  }

  componentDidMount() {
    if (!this.props.track.photoUrl) {
      this.setState({photoUrl: window.defaultTrackPhoto});
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

  render() {
    const mp3 = this.props.formType === "edit" ? null : (
      <label htmlFor="track">
        <p>Track</p>
        <input type="file" className="track-input" onChange={this.handleFile("mp3")} id="track" accept="audio/mp3"/>
      </label> 
    ) 

    let previewPhoto;
    if (this.state.photo) {
      previewPhoto = <img className="image-preview"src={this.state.photo}></img>
    }
    else if (this.state.photoUrl) {
      previewPhoto = <img className="image-preview"src={this.state.photoUrl}></img>
    }
    return (
    <section className="track-form-section">
      <h2>{this.props.formType}</h2>
      <form className='track-form' onSubmit={this.handleSubmit}>
        <div className="photo-form">
          {previewPhoto}
          <label htmlFor="photo">
            <input type="file" onChange={this.handleFile("photoUrl")} id="photo" accept="image/*"/>
          </label> 
        </div>
        <div className="right-side-form">
          <label htmlFor="title"> 
            <p>Title</p>
            <input type="text" className="title-input" onChange={this.updateTitle} id="title" value={this.state.title}/>
          </label> 
          {mp3}
          <button className="track-submit">{this.props.formType}</button>
        </div>
      </form>
    </section>
    )
  }
}

export default TrackForm;