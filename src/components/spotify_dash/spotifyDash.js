
import React from 'react';
import './spotifyDash.css';

const SpotifyDash = props => {
    return (
      <div className="SpotifyDash">
          <h2>Spotify</h2>
          <p id="user">{ props.user }</p>
      </div>
    );
  }
  
  export default SpotifyDash;
  