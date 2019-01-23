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
    const track = this.props.formType === "edit" ? null : (
      <label htmlFor="track">
        <p>Track</p>
        <input type="file" onChange={this.handleFile("mp3")} id="track" />
      </label> 
    ) 
    console.log(this.state)
    return (
    <section className="track-form-section">
      <form className='track-form' onSubmit={this.handleSubmit}>
        <label htmlFor="title"> 
          <p>Title</p>
          <input type="text" onChange={this.updateTitle} id="title" value={this.state.title}/>
        </label> 
        <label htmlFor="photo">
          <p>Photo</p>
          <input type="file" onChange={this.handleFile("photoUrl")} id="photo" />
        </label> 
      
        {track}
        <button>{this.props.formType}</button>
      </form>
    </section>
    )
  }
}

export default TrackForm;