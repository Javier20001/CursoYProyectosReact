import React from 'react';
import './App.css';
import Pantalla from './componentes/pantalla'
import Botones from './componentes/botones'
import { useState } from 'react';


function App() {
  // const [numero, setNumero] = useState("0");
  return (
    <div className="App">
      <div className='contenedorCalculadora'>
        <Pantalla
          valor="hola"
        />
        <div className='fila'>
          <Botones>1</Botones>
          <Botones>+</Botones>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
