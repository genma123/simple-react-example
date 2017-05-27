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
        padding:'50px 20px 50px 20px',
        margin: "5px",
        display:'inline-block'
    };

    const squares = this.props.squares.map((square) =>
        <Square styles={Object.assign({}, styles, {backgroundColor: square.color })} />);
   
    return (
        <span className="GridRow">{squares}<br/></span>
    );
  }
}

export default GridRow;