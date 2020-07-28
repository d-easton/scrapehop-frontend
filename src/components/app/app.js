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

  callLogin = () => {
    fetch("http://localhost:8888/login")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  callRapAlbumScrapes = () => {
    fetch("http://localhost:8888/scraping/albums")
        .then(res => res.text())
        .then(res => console.log(res));
  }

  // componentWillMount = () => {
  //   this.callAPI();
  // }

  handleLogin() {
    this.callLogin();
  }

  handleRapAlbumScrapes() {
    this.callRapAlbumScrapes();
  }

  render = () => {
    return(
    <div className="App">
      <header className="AppHeader">
        <div className="Container">
          <div className="TitleWrapper">  <h1> Scrapehop </h1>  </div>
          <div className="NavWrapper">    
            <NavBar onClickLogin = {login => this.handleLogin()} /> 
          </div>
        </div>
      </header>
      <div className="AppBody">
          <SourceBar onClickAlbumScrapes = {rapAlbums => this.handleRapAlbumScrapes()}/>
          <SpotifyDash user="david"/>
          <TrackTable />
      </div>
    </div>
    );
  }
}

export default App;
