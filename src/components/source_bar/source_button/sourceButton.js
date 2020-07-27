
import React from 'react';
import './sourceButton.css';

const SourceButton = props => {
    return (
      <div className="SourceButtons">
          <img className ="SourceImage" src={props.assetPath} alt={"icon"} />
      </div>
    );
  }
  
  export default SourceButton;
  