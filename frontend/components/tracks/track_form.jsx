import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
  }

  update() {

  } 

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }
}