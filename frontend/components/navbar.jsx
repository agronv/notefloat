import React from "react";
import { connect } from "react-redux";
import { logOut, logIn } from "../actions/session_actions";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttons = this.props.currentUser ? (
      <ul className="nav-buttons">
        <li className="nav-user">
          <Link to={`users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link>
        </li>
        <li className="log-out">
          <button onClick={this.props.logOut}>Log Out</button>
        </li>
      </ul>
    ) : (
      <div className="logged-out-buttons">
        <Link className="nav-button login" to="/login">Sign In</Link>
        <Link className="nav-button signup" to="/signup">Create account</Link>
        <button className="nav-button signup" onClick={this.props.demologin}>demo</button>
      </div>
    );
    
    return (
    <>
      <nav className='nav-row'> 
        <Link className='logo' to=''>
          <div className="notefloat"> 
            <i className="fab fa-soundcloud"></i>
            <h3>NoteFloat</h3>
          </div>
        </Link>
        {buttons}
      </nav>
    </>
    );
  }
}

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    demologin: () => dispatch(logIn({username: 'demo', password: 'demo'})),
  };
};

export default connect(msp,mdp)(NavBar);