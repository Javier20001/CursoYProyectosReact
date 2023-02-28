import React from "react";
import "../styles/Tarea.css"

function Tarea({texto}){
    return(
        <div className="ContenedorTarea">
            {texto}
            <div className="botonEliminar">
                eliminar
            </div>
        </div>
    )
}

export default Tarea;