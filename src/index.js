import React from 'react';
// libreria propia de react, reactDom para uso del dom
import ReactDOM from 'react-dom/client';

// estilos de css
// import './index.css';

// es el codigo que esta en App.js
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

