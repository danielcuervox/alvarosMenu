import React from "react";
import { useState } from "react";
import { platosDesayunos } from "./data/menu";

export const Desayunos = () => {
  const [fotoVisible, setFotoVisible] = useState(null);

  const mostrarFoto = (platoCompleto) => {
    // Ahora guardamos todo el objeto: {id, nombre, precio, img, alergenos}
    setFotoVisible(platoCompleto);
  };

  return (
    <div className="main-container">
      <div className="sectionTipoComida">
        <h2 className="tituloComidas">
          DESAYUNOS <img src="./icons/desayunos.png" alt="foto de desayunos" />
        </h2>

        <div className="menu-container">
          {platosDesayunos.map((plato) => (
            <div
              className="menu-item"
              key={plato.id}
              onClick={() => mostrarFoto(plato)}
              style={{ cursor: "pointer" }}
            >
              <span className="nombre">{plato.nombre}</span>
              <span className="precio">{plato.precio}</span>
              <button className="btn-ver">Ver</button>
            </div>
          ))}
        </div>
      </div>

      {fotoVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Usamos una clase de CSS tradicional en lugar de Tailwind */}
            <button
              className="btn-cerrar-x"
              onClick={() => setFotoVisible(null)}
            >
              &times;
            </button>

            <h2 className="nombreComidaAlert">{fotoVisible.nombre}</h2>
            <img src={fotoVisible.img} alt={fotoVisible.nombre} />

            {/* alergenos ./slider/1.jpg*/}
            <div className="alergenos-container">
              {fotoVisible.alergenos?.map((alergeno) => (
                <div key={alergeno} className="alergeno-item">
                  <img
                    src={`./imgAlergenos/${alergeno}.png`}
                    alt={alergeno}
                    className="icono-alergeno"
                  />
                  {/* Añadimos el texto. Usamos text-transform: capitalize en CSS <span className="nombre-alergeno">{alergeno}</span> */}
                </div>
              ))}
            </div>

            <button className="btn-cerrar" onClick={() => setFotoVisible(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
