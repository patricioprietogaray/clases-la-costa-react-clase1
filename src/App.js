import logo from './logo.svg';
import './App.css';

function App() { 
  // todo este jsx que se ve a continuacion se insertará
  // en el id root en public/index.html
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenidos a la primera clase de React</h1>
        <p>Código parecido a HTML pero es JSX</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
