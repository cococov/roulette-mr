import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './views';
import reportWebVitals from './reportWebVitals';
import './static/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
