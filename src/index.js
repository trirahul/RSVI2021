import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from './Components/Home';


ReactDOM.render(
  <React.StrictMode>
    
    <Home/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
