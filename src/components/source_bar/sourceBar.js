
import React from 'react';
import './sourceBar.css';

import SourceButton from './source_button/index';

import pitchfork from '../../assets/pitchfork_icon.jpg';
import spotify from '../../assets/spotify_icon.jpg';

const SourceBar = props => {
    return (
        <div className="SourceList">
            <ul>
                <li> <SourceButton assetPath={pitchfork}/></li>
                <li> <SourceButton assetPath={spotify}/></li>
            </ul>
        </div> 
    );
  }
  
  export default SourceBar;
  