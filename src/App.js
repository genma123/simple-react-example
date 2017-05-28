import React, { Component } from 'react';
import Status from './Status';
import Grid from './Grid';
import './App.css';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
		  squares: [],
      sequence: 0,
      status: ""
    };

    this.addSquare = this.addSquare.bind(this);
    this.removeSquare = this.removeSquare.bind(this);
  }
  
  determineStatus(increment) {
    let count = this.state.squares.length + increment;
    return count + " Squares Currently Displayed";
  }

  addSquare() {
    const square = { text: this._text.value, color: this._select.value.toLowerCase(), key: this.state.sequence };
    this.setState({ squares: this.state.squares.concat(square),
                  sequence: this.state.sequence + 1,
                  status: this.determineStatus(1)});
  }

  removeSquare(id) {
     this.setState({ squares: _.filter(this.state.squares, function(t) { return t.key !== id; }),
                    status: this.determineStatus(-1)});
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="text">Enter text: </label>
        <span><input id="text" type="text" ref={(el) => this._text = el}></input></span>
        <span><button onClick={this.addSquare}>
          Add a Square
        </button></span><span><select ref={(el) => this._select = el}><option>Red</option>
                                      <option>Blue</option>
                                      <option>Green</option>
                                      <option>Yellow</option>
                              </select></span>
        <Status message={this.state.status}/>
        <Grid squares={this.state.squares} deleteSquare={this.removeSquare} />
      </div>
    );
  }
}

export default App;
