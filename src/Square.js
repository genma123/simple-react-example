import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <span className="Square" style={this.props.styles}>
          The Square
      </span>
    );
  }
}

export default Square;