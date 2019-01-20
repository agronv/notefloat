import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions/session_actions";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttons = this.props.currentUser ? (
      <>
        <button onClick={this.props.logOut}>Log Out</button>
      </>
    ) : (
      <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </>
    );
    
    return (
    <>{buttons}</>
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
    logOut: () => dispatch(logOut())
  };
};

export default connect(msp,mdp)(NavBar);