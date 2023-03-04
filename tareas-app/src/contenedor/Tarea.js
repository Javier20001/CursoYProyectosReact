import React from "react";
import "../styles/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completa, completarTarea, eliminarTarea}){ //tenemos ahora un id, y dos procedimeintos que van a venir por paramentro y van a interactuar
    return(
        <div className={`tarea ${completa? "Completada" : "NoCompletada"}`}>
            <div className="contenedorTexto" onClick={() => completarTarea(id)}> {/* los on click necesitan una funcion, asi qeu cremaos una funcion vacia que llame nombre que le pasamos */}
                {texto}
            </div>
            <div className="botonEliminar" onClick={() => eliminarTarea(id)}>{/*cada vez que se haga un click invoca la funcion*/}
                <AiOutlineCloseCircle />
            </div>
        </div>
    )
}

export default Tarea;