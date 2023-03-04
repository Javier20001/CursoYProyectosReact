import React from 'react';
import './App.css';
import freecodeCamp from './imagenes/fcc-grey.png'

import ListaTareas from './contenedor/ListaDeTareas';

function App() {

  return (
    <div className="App">
      <div className='logoContenedor'>
        <img className='logoFreecode' src={freecodeCamp} alt="Logo freecode" />
      </div>
      <div className='contenedorAplicacion'>
        <h1 className='titulo'>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
