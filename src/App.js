import React, { Component } from 'react';
import Status from './Status';
import Grid from './Grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // const { appState, addSquare, removeSquare } = props;

    this.addSquare = this.addSquare.bind(this);
    this.removeSquare = this.removeSquare.bind(this);
  }
  
  addSquare() {
    this.props.addSquare(this._text.value, this._select.value.toLowerCase(), this.props.appState.get('sequence'));
  }

  determineStatus() {
    return this.props.appState.get('sequence') + " Squares Currently Displayed";
  }

  removeSquare(id) {
    this.props.removeSquare(id);
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
        <Status message={this.determineStatus()}/>
        {/* NOTE 'squares' is an Immutable List, must be converted to raw JavaScript!! */}
        <Grid squares={this.props.appState.get('squares').toJS()} deleteSquare={this.removeSquare} />
      </div>
    );
  }
}

export default App;
