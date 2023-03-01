import React, {useState} from "react";
import "../styles/ListaTareas.css"
import Formulario from "./Formulario";
import Tarea from "./Tarea";

function ListaTareas(){

    const [tareas , setTareas] = useState([]);

    return(
        <>
            <Formulario />
            <div className="ListaTareaContenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            texto={tarea.texto}
                            completa={tarea.completa}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;