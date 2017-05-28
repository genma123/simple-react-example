import React, { Component } from 'react';
import './Grid.css';
import GridRow from './GridRow';
import _ from 'lodash';

class Grid extends Component {
  constructor() {
    super();
  }

  render() {
    const chunks = _.chunk(this.props.squares, 5);
    const rows = chunks.map((chunk, i) => <GridRow key={i} squares={chunk} deleteSquare={this.props.deleteSquare} />);
    return (
      <div className="Grid">{rows}</div>
    );
  }
}

export default Grid;
