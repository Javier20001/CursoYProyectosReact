import React from "react";
import '../styles/Boton.css'

function Boton(props){
    
    const esOperador = valor =>{
        return isNaN(valor) && (valor != '=') && (valor != '.'); 
    }

    return(
        <div className={`botonContenedor ${esOperador(props.children) ? 'Operador' : ''}`} 
            onClick={() => props.manejarImputs(props.children)}
            >
            {/* al usar .children le estamos diciendo que use los valores que tiene entre las etiquetas dentro del app*/}
            {props.children}
        </div>
    );
}

export default Boton;