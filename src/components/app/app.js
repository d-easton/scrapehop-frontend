import React, {Component} from 'react';
import './app.css';

import SpotifyDash from '../spotify_dash/index';
import SourceBar from '../source_bar/index';

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
      <header className="AppHeader">
        <h1>
            Scrapehop app
        </h1>
      </header>
      <div className="AppBody">
          <SourceBar />
          <SpotifyDash user="david"/>
      </div>
    </div>
    );
  }
}

export default App;
