import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App source="http://raspwiwocontrol.no-ip.org:8001/devices"/>,
  document.getElementById('root')
);
