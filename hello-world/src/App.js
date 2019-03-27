import React, { Component } from 'react';
import * as _ from 'underscore';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
    const hello = function() {
	return [1, 2, 3];
    };
	
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
	    {_.map(hello(), n => n * 2) }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
