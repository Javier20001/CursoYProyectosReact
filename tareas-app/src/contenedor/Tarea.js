import React from "react";
import "../styles/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completa, completarTarea, eliminarTarea}){
    return(
        <div className={`tarea ${completa? "Completada" : "NoCompletada"}`}>
            <div className="contenedorTexto">
                {texto}
            </div>
            <div className="botonEliminar">
                <AiOutlineCloseCircle />
            </div>
        </div>
    )
}

export default Tarea;