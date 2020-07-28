import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/app/index.js';

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<App />, appContainer);