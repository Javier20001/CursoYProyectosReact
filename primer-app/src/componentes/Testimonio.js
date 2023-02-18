import React from "react";//importamos la libreria de react 
import '../Styles/Testimonio.css'

//(1) export function Testimonio(){code....} 
function Testimonio(props){ //creamos una funcion
  return(//y le indicamos que va retornar lo siguiente
    // tambien podemos enviar valores por parametro o un objeto que contenga eso valores como en este caso props que seria un conjunto de todos esos atributos
    <div className="contenedorTestimonio">
      <img className="imagenTestimonio" src={require(`../imagenes/${props.imagen}-Imagen.png`)} alt="Foto de Sarah"/>
      <div className="contenedorTextoTestimonio">
        <h2 className="nombreTestimonio">{props.nombre} in {props.pais}</h2>
        <h2 className="ocupacionTestimonio">{props.cargo} at {props.empresa}</h2>
        <p className="textoTestimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}


export default Testimonio; //cada vez que hacemos un modulo tenemos que exportarlo para que se pueda usar en otro lugar o exportar
//esto es una exportacion por Defecto tambien estan las Nombradas(1)


//habiendo terminado la estructura de lo que vamos a mostrar, ahora tenemos que ir al App.js que ahi insertariamos esta funcion...