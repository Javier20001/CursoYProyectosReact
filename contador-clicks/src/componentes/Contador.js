import React from "react";
import '../styles/contador.css'

function Contador({numero}){
    return(
        <div className="contenedorNumero">
            {numero}
        </div>
    );
}

export default Contador;