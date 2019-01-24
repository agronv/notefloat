import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "", };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(inputfield) {
    return (e) => {
      this.setState({ [inputfield]: e.target.value });
    };
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitAction(user).then(() => this.props.history.push("/"));
  }

  render() {
    const errors = this.props.errors.session.length > 0 ? <p className="session-errors">{this.props.errors.session[0]}</p> : null;
    const klass = this.props.errors.session.length > 0 ? "session-error-active" : "";
    
    return (
      <section className="log-in-section">
        <h2>{this.props.formType}</h2>
        <i className="fab fa-soundcloud soundcloud-big"></i>

        <form onSubmit={this.handleSubmit} className="log-in-form">
          <input className={klass} type="text" value={this.state.username} placeholder="Your email address or user name" onChange={this.update('username')} />
          <input className={klass} type="password" value={this.state.password} placeholder="Your password" onChange={this.update('password')} />
          {errors}
          <button className="log-in-button">{this.props.formType}</button>
        </form>
      </section>
    )
  }
}


export default SessionForm;