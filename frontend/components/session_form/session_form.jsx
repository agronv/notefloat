import React from 'react';
import { withRouter } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "", };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    const username = {
      strings: ["demo"],
      typeSpeed: 50,
    };
    const password = {
      strings: ["demo"],
      typeSpeed: 50,
    };
    this.setState({
      username: '',
      password: ''
    });
    setTimeout(() => {
      new Typed("#username", username);
      setTimeout(() => {
        new Typed("#password", password);
      }, 1000);
      setTimeout(() => {
        if (this.props.splash) {
          this.props.submitAction({username: "demo", password: "demo"}).then(() => this.props.history.push("/tracks")).then(() => this.props.closeModal());
        } else {
          this.props.submitAction({ username: "demo", password: "demo"}).then(() => this.props.closeModal());
        }
      }, 2000);
    }, 1000);
  }

  update(inputfield) {
    return (e) => {
      this.setState({ [inputfield]: e.target.value });
    };
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  componentDidMount() {
    // debugger
    if (this.props.demo) {
      this.demoLogin();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.splash) {
      this.props.submitAction(user).then(() => this.props.history.push("/tracks")).then(() => this.props.closeModal());
    } else {
      this.props.submitAction(user).then(() => this.props.closeModal());
    }
  }

  render() {
    const errors = this.props.errors.session.length > 0 ? <p className="session-errors">{this.props.errors.session[0]}</p> : null;
    const klass = this.props.errors.session.length > 0 ? "session-error-active" : "";
    return (
      <section className="log-in-section">
        <h2>{this.props.formType}</h2>
        <i className="fab fa-soundcloud soundcloud-big"></i>

        <form onSubmit={this.handleSubmit} className="log-in-form">
          <input id="username" className={klass} type="text" value={this.state.username} placeholder="Your username" onChange={this.update('username')} />
          <input id="password" className={klass} type="password" value={this.state.password} placeholder="Your password" onChange={this.update('password')} />
          {errors}
          <button className="log-in-button">{this.props.formType}</button>
        </form>
      </section>
    )
  }
}


export default withRouter(SessionForm);