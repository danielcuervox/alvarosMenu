import React from "react";

export const Bebidas = () => {
  const listaCervezas = [
    { id: 1, nombre: "Caña (Barril)", precio: "-€" },
    { id: 2, nombre: "Doble / Copa de Cerveza", precio: "-€" },
    { id: 3, nombre: "Tercio Artesanal", precio: "-€" },
    { id: 4, nombre: "Sin alcohol", precio: "-€" },
    { id: 5, nombre: "Cerveza 0,0 / Tostada", precio: "-€" },
  ];

  const listaVinos = [
    { id: 1, nombre: "Copa Vino Tinto", precio: "-€" },
    { id: 2, nombre: "Copa Vino Blanco", precio: "-€" },
  ];

  const listaRefrescos = [
    { id: 1, nombre: "Agua Mineral", precio: "-€" },
    { id: 2, nombre: "Agua con Gas", precio: "-€" },
    { id: 3, nombre: "Coca Cola", precio: "-€" },
    { id: 4, nombre: "Acuarius", precio: "-€" },
    { id: 5, nombre: "Fanta Naranja/Limón", precio: "-€" },
    { id: 6, nombre: "Tónica", precio: "-€" },
    { id: 7, nombre: "Zumos", precio: "-€" },
    { id: 8, nombre: "Mosto", precio: "-€" },
    { id: 9, nombre: "Té Frío", precio: "-€" },
  ];

  const listaCafes = [
    { id: 1, nombre: "Café Solo", precio: "-€" },
    { id: 2, nombre: "Café Cortado", precio: "-€" },
    { id: 3, nombre: "Café con Leche", precio: "-€" },
    { id: 4, nombre: "Café Bombón", precio: "-€" },
    { id: 5, nombre: "Carajillo", precio: "-€" },
    { id: 6, nombre: "Té / Infusiones", precio: "-€" },
    { id: 7, nombre: "Cola Cao", precio: "-€" },
  ];

  return (
    <>
      <div className="main-container">
        {/* Cervezas */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            CERVEZAS <img src="./icons/cervezas.png" alt="foto de entrantes" />
          </h2>

          <div className="menu-container">
            {listaCervezas.map((bebida) => (
              <div
                className="menu-item"
                key={bebida.id}
                //onClick={() => mostrarFoto(plato.img, plato.nombre)} // Ahora toda la fila activa la función
                style={{ cursor: "pointer" }} // Para que salga la manita al pasar el ratón
              >
                <span className="nombre">{bebida.nombre}</span>
                <span className="precio">{bebida.precio}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vinos */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            VINOS <img src="./icons/vino.png" alt="foto de entrantes" />
          </h2>

          <div className="menu-container">
            {listaVinos.map((bebida) => (
              <div
                className="menu-item"
                key={bebida.id}
                //onClick={() => mostrarFoto(plato.img, plato.nombre)} // Ahora toda la fila activa la función
                style={{ cursor: "pointer" }} // Para que salga la manita al pasar el ratón
              >
                <span className="nombre">{bebida.nombre}</span>
                <span className="precio">{bebida.precio}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Refrescos */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            REFRESCOS <img src="./icons/refresco.png" alt="foto de entrantes" />
          </h2>

          <div className="menu-container">
            {listaRefrescos.map((bebida) => (
              <div
                className="menu-item"
                key={bebida.id}
                //onClick={() => mostrarFoto(plato.img, plato.nombre)} // Ahora toda la fila activa la función
                style={{ cursor: "pointer" }} // Para que salga la manita al pasar el ratón
              >
                <span className="nombre">{bebida.nombre}</span>
                <span className="precio">{bebida.precio}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cafés */}
        <div className="sectionTipoComida">
          <h2 className="tituloComidas">
            CAFÉS E INFUSIONES{" "}
            <img src="./icons/cafe.png" alt="foto de entrantes" />
          </h2>

          <div className="menu-container">
            {listaCafes.map((bebida) => (
              <div
                className="menu-item"
                key={bebida.id}
                //onClick={() => mostrarFoto(plato.img, plato.nombre)} // Ahora toda la fila activa la función
                style={{ cursor: "pointer" }} // Para que salga la manita al pasar el ratón
              >
                <span className="nombre">{bebida.nombre}</span>
                <span className="precio">{bebida.precio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
