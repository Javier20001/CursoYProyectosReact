import React, {useState} from "react";
import "../styles/ListaTareas.css"
import Formulario from "./Formulario";
import Tarea from "./Tarea";

function ListaTareas(){

    const [tareas , setTareas] = useState([]); //creeamos una lista de tareas que es un listados de componentes

    const AgregarTarea = tarea =>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();//elimina todo los espacios 
            const nuevasTareas = [tarea, ...tareas];//indico que voy a poner e nuevo componente delante de todos los demas 
            setTareas(nuevasTareas);
        }else{
            console.log("la tarea esta vacia");
        }
    }

    const EliminarTarea = id =>{
       const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);//filtro para decartar los que tienen su id y los agrego a una nueva lista
       setTareas(tareasActualizadas);
    }

    const ModificarTarea = id =>{
        const tareaModificar = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.completa = !tarea.completa;
            }
            return tarea;
        });//recorro el arreglo y retorn una lista con la tarea alterada 
        setTareas(tareaModificar);
    }

    return(
        <>
            <Formulario onSubmit={AgregarTarea}/>
            <div className="ListaTareaContenedor">
                {
                    tareas.map((tarea) => //de los lista de tareas creamos un map, uqe lo que hara es recorrerlo 
                        <Tarea
                            key={tarea.id}//este es un identificador unico de react 
                            id={tarea.id}//y este es el de la tarea
                            texto={tarea.texto}
                            completa={tarea.completa}
                            eliminarTarea = {EliminarTarea}
                            completarTarea = {ModificarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;