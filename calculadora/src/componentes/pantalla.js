import React from "react";
import '../styles/Pantalla.css'
const Pantalla = (props) =>(
    <div className="contenedorPantalla">
        {props.texto}
    </div>
);

export default Pantalla;