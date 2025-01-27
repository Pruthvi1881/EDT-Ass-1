import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: Import any global styles here
import App from './App';  // Import the main App component

// Render the App component inside the root div in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
