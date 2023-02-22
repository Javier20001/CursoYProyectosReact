import React from "react";
import '../styles/BotonBorrar.css'


const BotonBorrar = (props) =>(
    <div className="botonBorrar" onClick={() => props.manejarImputs()}>
        {props.children}
    </div>
);

export default BotonBorrar;