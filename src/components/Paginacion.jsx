import React from "react";

const Paginacion = ({ anterior, siguiente, onSiguiente, onAnterior }) => {
  return (
    <nav>
      <ul className="pagination justify-content-center mt-4">
        {anterior ? (
          <button onClick={onAnterior} className="btn btn-warning">
            Anterior
          </button>
        ) : (
          <button onClick={onAnterior} className="btn btn-warning disabled">
            Anterior
          </button>
        )}
        {siguiente ? (
          <button onClick={onSiguiente} className="btn btn-warning ms-2">
            Siguiente
          </button>
        ) : (
          <button
            onClick={onSiguiente}
            className="btn btn-warning ms-2 disabled"
          >
            Siguiente
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Paginacion;
