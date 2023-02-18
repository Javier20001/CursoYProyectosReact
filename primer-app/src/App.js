
import './App.css';

import Testimonio from './componentes/Testimonio.js'

// en el caso de que usemos exportacion Nombradas hay que cambiar un poco el import, quedando algo como:
// import {nombre_de_la_funcion} from 'url'
function App() {
  return (
    <div className='App'>
      <div className="contenedor">
        <h1 className='contendorCabezaText'>Estos son los algunos comentarios de nuestros alumnos</h1>
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='Sarah'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio='"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."'
        />
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapore'
          imagen='Shawn'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio='"Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."'
        />
        <Testimonio
          nombre='Emma Bostian'
          pais='Sweden'
          imagen='Emma'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio='"Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."'
        />
      </div>
    </div>
    
  );
}

export default App;
