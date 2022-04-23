import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataStates } from './contexts/DataStates';

ReactDOM.render(
  <DataStates>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataStates>,
  document.getElementById('root')
);
