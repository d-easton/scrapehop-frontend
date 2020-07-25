import React from 'react';
import ReactDom from 'react=dom';
import App from './components/app/app';

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<App />, appContainer);