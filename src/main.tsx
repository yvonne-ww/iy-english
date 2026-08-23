import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import globalStyles from './theme/globalStyles';

const styleSheet = document.createElement('style');
styleSheet.textContent = globalStyles;
document.head.appendChild(styleSheet);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
