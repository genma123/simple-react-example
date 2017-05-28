import React, { Component } from 'react';
import './Status.css';

class Status extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="Status">
          {this.props.message}
      </div>
    );
  }
}

export default Status;