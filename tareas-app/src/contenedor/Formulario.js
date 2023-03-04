import React, {useState} from "react"; //el useState es un hooks
import "../styles/Formulario.css"
import {v4 as uuidv4 } from 'uuid';

function Formulario(props){
    const [input, setInput] = useState('');//lo usamos para obtener el valor del input

    const manejaCambio = e =>{
        setInput(e.target.value);
    }

    const AgregarTarea = e =>{
        e.preventDefault(); //evita que se recarge la pagina de nuevo cuando se hace un submit
        const NuevaTarea = { //creamos una nueva tarea y luego la retorno 
            id : uuidv4(),
            texto : input,
            finalizada : false
        }
        props.onSubmit(NuevaTarea);
    } 

    return(
        <form className="formularioContenedor" onSubmit={AgregarTarea}>
            <div className='contenedorAgregar'>
                <input className='inputAgragar' type="text" placeholder="Escribir una tarea" onChange={manejaCambio}></input>
                {/* el onChange llamara a la funcion cada vez que se haga un cambio en el input*/}
                <button className='buttonAgragar' onClick={AgregarTarea}>Agregar Tarea</button>
            </div>
        </form>
    );
}

export default Formulario;