import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TransportApp from './TransportApp';
import HelpApp from './HelpApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TransportApp/>
    <HelpApp/>
  </React.StrictMode>
);


