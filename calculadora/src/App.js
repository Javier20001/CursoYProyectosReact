import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonBorrar from './componentes/BotonBorrar';
import { useState } from 'react';
import {evaluate} from 'mathjs';


function App()  {
  const [valor1 , setValor1] = useState('');

  const cambiarValor = input =>{
    setValor1(valor1+input);
  }

  const realizarOperacion = () =>{
    if(valor1!=''){
      setValor1(evaluate(valor1));
    }else{
      alert("ingrese caracteres para reliazar la operacion");
    }
  }

  const resetValor = () =>{
    setValor1('');
  }
  return (
    <div className="App">
      <div className='contenedorCalculadora'>
        <Pantalla texto={valor1} />
        <div className='contenedorBotones'>
          <div className='fila'>
            <Boton manejarImputs={cambiarValor}>1</Boton> {/* //si queremos pasar una funcion no le pongamos los parentesis */}
            <Boton manejarImputs={cambiarValor}>2</Boton>
            <Boton manejarImputs={cambiarValor}>3</Boton>
            <Boton manejarImputs={cambiarValor}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarImputs={cambiarValor}>4</Boton>
            <Boton manejarImputs={cambiarValor}>5</Boton>
            <Boton manejarImputs={cambiarValor}>6</Boton>
            <Boton manejarImputs={cambiarValor}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarImputs={cambiarValor}>7</Boton>
            <Boton manejarImputs={cambiarValor}>8</Boton>
            <Boton manejarImputs={cambiarValor}>9</Boton>
            <Boton manejarImputs={cambiarValor}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarImputs={cambiarValor}>.</Boton>
            <Boton manejarImputs={cambiarValor}>0</Boton>
            <Boton manejarImputs={realizarOperacion}>=</Boton>
            <Boton manejarImputs={cambiarValor}>/</Boton>
          </div>
          <div className='fila'>
            <BotonBorrar manejarImputs={resetValor}>AC</BotonBorrar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
