import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor() {
    super();
	this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete() {
    this.props.deleteSquare(this.props.id); 
  }

  render() {
    return (
      <div className="Square" style={this.props.styles}>
          {this.props.title}<br/><br/>
          <input type="button" value="X" onClick={this.handleClickDelete} />
      </div>
    );
  }
}

export default Square;