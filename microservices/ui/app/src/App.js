import React, { Component } from 'react';
import logo from './3cflqZM.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Uber Clone</h1>
        </header>
        <p className="App-intro">
          Uber is a ridesharing app which provides fast, reliable rides within minutes—day or night.
        </p>
      </div>
    );
  }
}

export default App;
