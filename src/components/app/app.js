import React, {Component} from 'react';
import './app.css';

import SpotifyDash from '../spotify_dash/index';
import SourceBar from '../source_bar/index';
import TrackTable from '../track_table/index';
import NavBar from '../nav_bar/index';

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
        <div className="Container">
          <div className="TitleWrapper">  <h1> Scrapehop app </h1>    </div>
          <div className="NavWrapper">    <NavBar />                  </div>
        </div>
      </header>
      <div className="AppBody">
          <SourceBar />
          <SpotifyDash user="david"/>
          <TrackTable />
      </div>
    </div>
    );
  }
}

export default App;
