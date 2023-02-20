import React from "react";
import '../styles/botones.css'

function Botones({props}){
    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor!=='=');
    }

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
            {props.children}
        </div>
    );
}

export default Botones;