import React from "react";
import '../styles/pantalla.css'

function Pantalla({valor}){
    return(
        <div className="pantallaContenedor">
            {valor}
        </div>
    );
}

export default Pantalla;