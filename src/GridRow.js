import React, { Component } from 'react';
import Square from './Square';
import './GridRow.css';

class GridRow extends Component {
  constructor() {
    super();
  }

  render() {
    const styles = {
        color:'white',
        backgroundColor:'green',
        padding:'30px 20px 30px 20px',
        margin: "5px",
        display:'inline-block',
        textAlign: 'right'
    };

    const squares = this.props.squares.map((square) =>
        <Square key={square.key} id={square.key} title="A Square" styles={Object.assign({}, styles, {backgroundColor: square.color })} deleteSquare={this.props.deleteSquare} />);
   
    return (
        <span className="GridRow">{squares}<br/></span>
    );
  }
}

export default GridRow;