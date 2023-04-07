import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Personajes from "./components/Personajes";
import Paginacion from "./components/Paginacion";

export const App = () => {
  const url = "https://rickandmortyapi.com/api/character";

  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});

  const fetchPersonajes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPersonajes(data.results);
    setInfo(data.info);
  };

  const onSiguiente = () => {
    fetchPersonajes(info.next);
  };

  const onAnterior = () => {
    fetchPersonajes(info.prev);
  };

  useEffect(() => {
    fetchPersonajes();
  }, []);

  return (
    <>
      <Header titulo={"Rick and Morty"} />
      <Paginacion
        onSiguiente={onSiguiente}
        onAnterior={onAnterior}
        siguiente={info.next}
        anterior={info.prev}
      />
      <div className="container">
        {personajes.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <Personajes personajes={personajes} />
        )}
      </div>
      <Paginacion
        onSiguiente={onSiguiente}
        onAnterior={onAnterior}
        siguiente={info.next}
        anterior={info.prev}
      />
    </>
  );
};

export default App;
