// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() { 
  // todo este jsx que se ve a continuacion se insertará
  // en el id root en public/index.html
  
  // los estilos deben estar en un objeto
  const estiloCSS={
    color: "blue",
    margin: "1rem",
    padding: 5,
  }
  const sinVinieta = {
    listStyleType: "none",
  }

  const $clase = {
    nro: "1",
    tema: "React",
  }

  const autos = [
    {id: 1, nombre: 'Corsa', marca: 'Chevrolet'},
    {id: 2, nombre: 'Siena', marca: 'Fiat'},
    {id: 3, nombre: 'Ka', marca: 'Ford'},
    {id: 4, nombre: 'Gol', marca: 'Volkswagen'},
    {id: 5, nombre: 'A7', marca: 'Audi'},
  ]

  const huboError = false;

  return(
    <div className="App">
      {/* <header className='App-header'> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2 style={estiloCSS}>Bienvenido a la clase {$clase.nro} de {$clase.tema}</h2>

      {/* se pueden injectar css directo (inline) en vez de llamar al objeto con doble llave {{}} 
       atenti que tiene prioridad inline que desde el archivo css, como con html y css, PUEDO AGREGAR
       LOGICA*/}
        <h2 style={{
            color: "white",
            backgroundColor: huboError ? "red" : "blue",
            margin: "1rem",
            padding: 5,
                    }}>Bienvenido a la clase {$clase.nro} de {$clase.tema}</h2>


      {/* </header> */}
      <ul style={sinVinieta}>
        {
          autos.map(auto => (<li key={auto.id}>
            <strong>{auto.marca}</strong>
            <span>{auto.nombre}</span>
          </li>))
        }
      </ul>
    </div>

  );
}

export default App;
