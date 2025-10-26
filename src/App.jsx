import React from 'react';
import Navegacion from './componentes/Navegacion';
import Hero from './componentes/Hero';
import Introduccion from './componentes/Introduccion';
import Proyectos from './componentes/Proyectos';
import Ubicacion from './componentes/Ubicacion';
import Galeria from './componentes/Galeria';
import Contacto from './componentes/Contacto';
import PieDePagina from './componentes/PieDePagina';

function App() {
  return (
    <>
      <Navegacion />
      <main>
        <Hero />
        <Introduccion />
        <Proyectos />
        <Ubicacion />
        <Galeria />
        <Contacto />
      </main>
      <PieDePagina />
    </>
  );
}

export default App;