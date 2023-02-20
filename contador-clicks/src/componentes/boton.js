import React from "react";
import '../styles/boton.css';

function boton({texto , estadoBotton , manejarClick}){
    return(
        <button className={estadoBotton ? 'boton-click' : 'boton-reset'}
            onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default boton;
