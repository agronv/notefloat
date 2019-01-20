import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "", 
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  update(inputfield) {
    return (e) => {
      this.setState({ [inputfield]: e.target.value });
    };
  }

  goBack() {
    this.props.history.push("/")
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitAction(user).then(() => this.props.history.push("/"));
  }

  render() {
    const errors = this.props.errors.session ? <p>{this.props.errors.session[0]}</p> : null;
    return (
      <div className='from-div'>
        <section className="log-in-section">
          <h2>{this.props.formType}</h2>
          <i className="fab fa-soundcloud soundcloud-big"></i>
          <form onSubmit={this.handleSubmit} className="log-in-form">
            <input type="text" value={this.state.username} placeholder="Your email address or user name" onChange={this.update('username')} />
            <input type="password" value={this.state.password} placeholder="Your password" onChange={this.update('password')} />
            {errors}
            <button className="log-in-button">{this.props.formType}</button>
          </form>
        </section>
        <div onClick={this.goBack}className='form-screen'></div>
      </div>
    )
  }
}


export default SessionForm;