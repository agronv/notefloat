import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "", 
      email: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(inputfield) {
    return (e) => {
      this.setState({ [inputfield]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitAction(user).then(() => this.props.history.push("/"));
  }

  render() {

    const errors = this.props.errors.session ? this.props.errors.session[0] : null;
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <p>{errors}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} placeholder="Username" onChange={this.update('username')} />
          <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />

          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}


export default SessionForm;