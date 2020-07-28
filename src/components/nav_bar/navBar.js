
import React from 'react';
import './navBar.css';

const NavBar = props => {
    return (
        <div className="ControlBar">
            <ul>
                <li> <button type="button" class="btn btn-outline-dark">Login with Spotify</button></li>
                
            </ul>
        </div> 
    );
  }
  
  export default NavBar;
  