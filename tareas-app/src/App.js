import React from 'react';
import './App.css';
import freecodeCamp from './imagenes/fcc-grey.png'
import Tarea from './contenedor/Tarea';
import {useState} from 'react';

function App() {

  return (
    <div className="App">
      <div className='logoContenedor'>
        <img className='logoFreecode' src={freecodeCamp} alt="Logo freecode" />
      </div>
      <div className='contenedorAplicacion'>
        <div className='titulo'>Mis Tareas</div>
        <div className='contenedorAgregar'>
          <input className='inputAgragar' type="text"></input>
          <button className='buttonAgragar'>Agregar Tarea</button>
        </div>
        <div className='contenedorTareas'>
          <Tarea
            texto="estudiar programamcion"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
