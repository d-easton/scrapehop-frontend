'use strict'

import React, {Component} from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { currentUser: "" };
  }

  callAPI = () => {
    fetch("http://localhost:8888/login")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount = () => {
    this.callAPI();
  }

  render = () => {
    return(
    <div className="App">
      <header className="App-header">
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
    );
  }
}

export default App;
