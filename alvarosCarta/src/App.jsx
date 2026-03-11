import { useState } from "react";

//import costillas from "./assets/costillas.png";
import viteLogo from "/vite.svg";

import Footer from "./footer";
import "./footer.css";
import Header from "./Header";
import Slider from "./Slider";
import "./header.css";
import "./App.css";

function App() {
  const [fotoVisible, setFotoVisible] = useState(null);

  const entrantes = [
    {
      id: 1,
      nombre: "NACHOS CON CHILI DE CARNE",
      precio: "18.50€",
      img: "/nachosChileCarne.png",
    },
    {
      id: 2,
      nombre: "QUESADILLA DE POLLO Y GUACAMOLE",
      precio: "11.00€",
      img: "/quesadillaPollo.jpg",
    },
  ];

  const ensaladas = [
    {
      id: 1,
      nombre: "ENSALADA CÉSAR",
      precio: "12.50€",
      img: "/ensaladaCesar.jpg",
    },
    {
      id: 2,
      nombre: "ENSALADA DE RULO DE CABRA Y GULAS",
      precio: "14.50€",
      img: "/ensaladaGulas.jpg",
    },
    {
      id: 3,
      nombre: "ENSALADA TROPICAL DE GAMBAS",
      precio: "14.00€",
      img: "/ensaladaTropical.jpg",
    },
  ];

  const hamburguesas = [
    {
      id: 1,
      nombre: "HAMBURGUESA ALVARO'S",
      precio: "10.50€",
      img: "/hamburguesa.jpg",
    },
    {
      id: 2,
      nombre: "HAMBURGUESA DE TERNERA Y RULO DE CABRA",
      precio: "14.00€",
      img: "/hamburguesaCabra.jpg",
    },
  ];

  const sandwiches = [
    {
      id: 1,
      nombre: "SÁNDWICH MIXTO | CON HUEVO",
      precio: "5.00€",
      img: "/sandwich.jpg",
    },
    {
      id: 2,
      nombre: "SÁNDWICH VEGETAL",
      precio: "5.00€",
      img: "/sandwichVegetal.jpg",
    },
    {
      id: 3,
      nombre: "SÁNDWICH VILLAROY",
      precio: "7.50€",
      img: "/sandwichVillaroy.jpg",
    },
  ];

  const especialidades = [
    {
      id: 1,
      nombre: "ENTRECOT A LA PARRILLA",
      precio: "18.50€",
      img: "/entrecot.jpg",
    },
    {
      id: 2,
      nombre: "COSTILLAR ESTILO BBQ",
      precio: "18.50€",
      img: "/costillas.png",
    },
    {
      id: 3,
      nombre: "PAELLA (CARNE | MARISCO | MIXTA | VERDURAS)",
      precio: "*por encargo",
      img: "/paella.jpg",
    },
    {
      id: 4,
      nombre: "PARILLADA DE CARNE ESTILO ALVARO'S",
      precio: "26.50€",
      img: "/parrilladaCarne.jpg",
    },
    {
      id: 5,
      nombre: "PULPO A LA GALLEGA",
      precio: "22.50€",
      img: "/pulpoGallega.jpg",
    },
    {
      id: 6,
      nombre: "SEPIA A LA PLANCHA",
      precio: "18.00€",
      img: "/sepia.jpg",
    },
  ];

  const racionesTradicionales = [
    {
      id: 1,
      nombre: "ALITAS DE POLLO",
      precio: "13.50€",
      img: "/alitas.png",
    },
    {
      id: 2,
      nombre: "BOQUERONES FRITOS",
      precio: "13.50€",
      img: "/boquerones.jpg",
    },
    {
      id: 3,
      nombre: "CALAMARES A LA ROMANA",
      precio: "13.50",
      img: "/calamaresRomana.jpg",
    },
    {
      id: 4,
      nombre: "CAZÓN",
      precio: "13.00€",
      img: "/cazon.jpg",
    },
    {
      id: 5,
      nombre: "CHOPITOS DE HUELVA",
      precio: "14.00€",
      img: "/chopitos.jpg",
    },
    {
      id: 6,
      nombre: "COCHINILLO COCHIFRITO",
      precio: "14.00€",
      img: "/cochifrito.jpg",
    },
    {
      id: 7,
      nombre: "CROQUETAS DE JAMÓN",
      precio: "13.50€",
      img: "/croquetas.jpg",
    },
    {
      id: 8,
      nombre: "GAMBAS AL AJILLO",
      precio: "15.00€",
      img: "/gambasAjillo.jpg",
    },
    {
      id: 9,
      nombre: "HUEVOS ROTOS CON GULAS | JAMÓN",
      precio: "14.00€",
      img: "/huevosGulas.jpg",
    },
    {
      id: 10,
      nombre: "OREJA A LA PLANCHA",
      precio: "13.50€",
      img: "/oreja.jpg",
    },
    {
      id: 11,
      nombre: "PATATAS ALIOLI | BRAVIOLI",
      precio: "9.50€",
      img: "/patatasAlioli.jpg",
    },
    {
      id: 12,
      nombre: "REVUELTO DE GAMBAS Y GULAS",
      precio: "15.80€",
      img: "/revueltoGulas.jpg",
    },
  ];

  const bocadillos = [
    {
      id: 1,
      nombre: "BOCADILLO DE BACÓN Y QUESO",
      precio: "5.50€",
      img: "/bocadillo.jpg",
    },
    {
      id: 2,
      nombre: "BOCADILLO DE CALAMARES",
      precio: "7.00€",
      img: "/bocadilloCalamares.jpg",
    },
    {
      id: 3,
      nombre: "BOCADILLO DE JAMÓN SERRANO",
      precio: "6.50€",
      img: "/bocadilloSerrano.jpg",
    },
    {
      id: 4,
      nombre: "BOCADILLO DE LOMO Y QUESO",
      precio: "6.00€",
      img: "/bocadilloLomoQueso.jpg",
    },
    {
      id: 5,
      nombre: "BOCADILLO DE TORTILLA",
      precio: "6.00€",
      img: "/bocadilloTortilla.jpg",
    },
  ];

  const postres = [
    {
      id: 1,
      nombre: "ARROZ CON LECHE",
      precio: "4.00€",
      img: "/arrozLeche.jpg",
    },
    {
      id: 2,
      nombre: "FLAN DE NUEVO | PUDDING",
      precio: "4.50€",
      img: "/flan.jpg",
    },
    {
      id: 3,
      nombre: "FRUTA DE TEMPORADA",
      precio: "4.70€",
      img: "/fruta.jpg",
    },
    {
      id: 4,
      nombre: "TARTA DE QUESO",
      precio: "5.50€",
      img: "/tartaQueso.jpg",
    },
  ];

  const mostrarFoto = (url, nombre) => {
    setFotoVisible({ url, nombre });
  };

  return (
    <>
      <Header />
      <Slider />

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
                onClick={() => mostrarFoto(plato.img, plato.nombre)} // Ahora toda la fila activa la función
                style={{ cursor: "pointer" }} // Para que salga la manita al pasar el ratón
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
                onClick={() => mostrarFoto(plato.img, plato.nombre)} // Ahora toda la fila activa la función
                style={{ cursor: "pointer" }} // Para que salga la manita al pasar el ratón
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
                onClick={() => mostrarFoto(plato.img, plato.nombre)}
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
                onClick={() => mostrarFoto(plato.img, plato.nombre)}
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
                onClick={() => mostrarFoto(plato.img, plato.nombre)}
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
                onClick={() => mostrarFoto(plato.img, plato.nombre)}
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
                onClick={() => mostrarFoto(plato.img, plato.nombre)}
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
                onClick={() => mostrarFoto(plato.img, plato.nombre)}
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
              <h1 className="nombreComidaAlert">{fotoVisible.nombre}</h1>
              <img src={fotoVisible.url} alt={fotoVisible.nombre} />
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

      <Footer />
    </>
  );
}

export default App;
