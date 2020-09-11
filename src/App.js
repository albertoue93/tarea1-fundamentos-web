import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hola from './Hola'
import Counter from './component/Counter'

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          {/*Incluimos nuestro componente*/}
          <Hola/>
          <Counter/>
        </div>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>Integrante: Alberto Urbina Espinoza</footer>
    </div>
  );
}

export default App;
