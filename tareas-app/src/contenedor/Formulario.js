import React from "react";
import "../styles/Formulario.css"

function Formulario(props){
    return(
        <form className="formularioContenedor">
            <div className='contenedorAgregar'>
                <input className='inputAgragar' type="text" placeholder="Escribir una tarea"></input>
                <button className='buttonAgragar'>Agregar Tarea</button>
            </div>
        </form>
    );
}

export default Formulario;