import React from 'react';
// libreria propia de react, reactDom para uso del dom
import ReactDOM from 'react-dom/client';

// estilos de css
// import './index.css';

// es el codigo que esta en App.js
import App from './App';


// apunta a public/index.html -> apunta al div con id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //crear el root y renderizarlo
  // los componentes se identifican como si 
  // fueran tags (etiquetas de html)
  <React.StrictMode>
    {/* <App></App> o <App />  */}
    {/* es lo mismo */}
    <App />
  </React.StrictMode>
  // <React.StrictMode>
  //   {/* renderiza App.js, (los comentarios son distintos!) */}
  //   <App />
  // </React.StrictMode>
);

