import React from 'react';
import './App.css';
import Boton from './componentes/boton'
import Contador from './componentes/Contador'
import freecodeCamp from './imagenes/fcc-grey.png'
import {useState} from 'react';

function App() {
  //esta es una constante qeu contiene un estado y una funcion que altera ese estado y luego le indicamos el valor inicial
  const [numClics, setNumClics] = useState(0);

  const contendorClick = () =>{
    setNumClics(numClics+1); //entonces aca llamamos a la funcion que cambia el estado, es practicamen lo mismo qeu un set en java 
  }
  const reseteoClicks = () =>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='contenedor-img'>
        <img className='logoimg' src={freecodeCamp} alt="logo de freecodecamp" />
      </div>
      <div className='contendor'>
        <Contador
          numero={numClics}
        />
        <Boton
          texto="click"
          estadoBotton={true}
          manejarClick={contendorClick}
        />
        <Boton
          texto="reset"
          estadoBotton={false}
          manejarClick={reseteoClicks}
        />
      </div>
    </div>
  );
}

export default App;
