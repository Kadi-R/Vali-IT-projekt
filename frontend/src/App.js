import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kohtumised käeulatuses!</h1>
        </header>
          <h1> SIIA TULEB PEALKIRI </h1>
          <body>
          <form name="form">
              <div className="form group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username" />
              </div>
              <div className="form error">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password"/>
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Login</button>
                  <button className="btn btn-link">Register</button>
              </div>
          </form>
          </body>
      </div>
    );
  }
}

export default App;
