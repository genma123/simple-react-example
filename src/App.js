import React, { Component } from 'react';
import Grid from './Grid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
		  squares: []
    };

    this.addSquare = this.addSquare.bind(this);
  }

  addSquare() {
    let count = this.state.squares.length;
    const square = { color: count % 2 === 0 ? "red" : "green" };
    this.setState(this.setState({ squares: this.state.squares.concat(square)}));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addSquare}>
          Add a Square
        </button>
        <Grid squares={this.state.squares} />
      </div>
    );
  }
}

export default App;
