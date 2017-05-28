import React, { Component } from 'react';
import Grid from './Grid';
import './App.css';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
		  squares: [],
      sequence: 0
    };

    this.addSquare = this.addSquare.bind(this);
    this.removeSquare = this.removeSquare.bind(this);
  }

  addSquare() {
    let count = this.state.squares.length;
    const square = { color: count % 2 === 0 ? "red" : "green", key: this.state.sequence };
    this.setState({ squares: this.state.squares.concat(square),
                  sequence: this.state.sequence + 1});
  }

  removeSquare(id) {
     this.setState({ squares: _.filter(this.state.squares, function(t) { return t.key !== id; })});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addSquare}>
          Add a Square
        </button>
        <Grid squares={this.state.squares} deleteSquare={this.removeSquare} />
      </div>
    );
  }
}

export default App;
