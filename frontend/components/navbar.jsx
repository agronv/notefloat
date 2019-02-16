import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions/session_actions";
import { Link } from "react-router-dom";
import { openModal } from "../actions/modal_actions";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(e) {
    this.props.logOut();
    this.props.history.push("/");
  }

  render() {
    const { currentUser } = this.props;
    
    const userPhoto = currentUser && currentUser.photoUrl ? (
      <img className="user-photo" src={currentUser.photoUrl} /> ) :( 
      <img className="user-photo" src={window.defaultUserPhoto} />);

    const buttons = this.props.currentUser ? (
      <ul className="nav-buttons">
        <li>
          <Link className="upload-link" to="/tracks/new">Upload</Link>
        </li>
        <li className="nav-user">
          <Link className="user-button" to={`/users/${this.props.currentUser.id}`}>
            <div className="user-button-info">
              {userPhoto}
              <p>{this.props.currentUser.username}</p>
            </div>
          </Link>
        </li>
        <li className="log-out">
          <button className="log-out-button"onClick={this.logOut}>Log Out</button>
        </li>
      </ul>
    ) : (
      <div className="logged-out-buttons">
        <button className="nav-button login" onClick={() => this.props.openModal({modal: 'login'})}>Sign In</button>
        <button className="nav-button signup" onClick={() => this.props.openModal({modal: 'signup'})}>Create account</button>
        <button className="nav-button signup" onClick={() => this.props.openModal({modal: "login", demo: true})}>demo</button>
      </div>
    );
    
    return (
      <>
        <header>
          <nav className='nav-row'> 
            <div className='navbar-index'>
              <Link to='/'>
                <div className="notefloat"> 
                  <i className="fab fa-soundcloud"></i>
                  <h3>NoteFloat</h3>
                </div>
              </Link>
              <Link to='/tracks'>
                <button className="tracks-button">Collection</button>
              </Link>
            </div>
            {buttons}
          </nav>
        </header>
        <div className="spaceholder"></div>
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
    openModal: (data) => dispatch(openModal(data)),
  };
};

export default connect(msp,mdp)(NavBar);