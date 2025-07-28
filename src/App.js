import React from 'react';
import NavBar from './components/NavBar/navbar';
import Contenedor from './components/Contenedor/contenedor';

const App = () => {
  return (
    <>
      <NavBar />
      <Contenedor 
        mensaje="¡Bienvenido a GamerSell!"
        nombre="Elden Ring"
        genero="Acción-RPG"
        precio={59.99}/>
    </>
  );
}
export default App;
