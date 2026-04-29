import { useState } from "react";
import Slider from "./Slider";
import { Sliderr } from "./Sliderr";
import {
  entrantes,
  ensaladas,
  hamburguesas,
  sandwiches,
  especialidades,
  racionesTradicionales,
  bocadillos,
  postres,
} from "./data/menu";

export const Carta = () => {
  const [fotoVisible, setFotoVisible] = useState(null);

  /* const mostrarFoto = (url, nombre) => {
    setFotoVisible({ url, nombre });
  }; */

  const mostrarFoto = (platoCompleto) => {
    // Ahora guardamos todo el objeto: {id, nombre, precio, img, alergenos}
    setFotoVisible(platoCompleto);
  };

  return (
    <>
      <Sliderr />
      <div className="main-container">
        {/* entrantes */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            ENTRANTES <img src="./icons/entrante.png" alt="foto de entrantes" />
          </h2>

          <div className="menu-container">
            {entrantes.map((plato) => (
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

        {/* ensaladas */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            ENSALADAS <img src="./icons/ensalada.png" alt="foto de entrantes" />
          </h2>
          <div className="menu-container">
            {ensaladas.map((plato) => (
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

        {/* hamburguesas */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            HAMBURGUESAS{" "}
            <img src="./icons/hamburguesa.png" alt="foto de entrantes" />
          </h2>
          <div className="menu-container">
            {hamburguesas.map((plato) => (
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

        {/* sandwiches */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            SANDWICHES{" "}
            <img src="./icons/sandwich.png" alt="foto de entrantes" />
          </h2>
          <div className="menu-container">
            {sandwiches.map((plato) => (
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

        {/* especialidades */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            ESPECIALIDADES{" "}
            <img src="./icons/alitas.png" alt="foto de entrantes" />
          </h2>
          <div className="menu-container">
            {especialidades.map((plato) => (
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

        {/* raciones tradicionales */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            RACIONES TRADICIONALES{" "}
            <img src="./icons/paella.png" alt="foto de entrantes" />
          </h2>
          <div className="menu-container">
            {racionesTradicionales.map((plato) => (
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

        {/* bocadillos */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            BOCADILLOS{" "}
            <img src="./icons/bocadillo.png" alt="foto de entrantes" />
          </h2>
          <div className="menu-container">
            {bocadillos.map((plato) => (
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

        {/* postres */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            POSTRES <img src="./icons/entrante.png" alt="foto de entrantes" />
          </h2>
          <div className="menu-container">
            {postres.map((plato) => (
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

              <button
                className="btn-cerrar"
                onClick={() => setFotoVisible(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
