import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './assets/fonts/material.icons.css'
import App from './components/App';
import './index.css';


import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <App classes="123"/>,
  document.getElementById('root') as HTMLElement
  
);
registerServiceWorker();
