import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link
          to="/"
          onClick={() => setMenuAbierto(false)}
          className="logo-link"
        >
          <img src="./icons/logoAlvarosBlanco.png" alt="Logo de Alvaro's" />
          <span>Alvaro's</span>
        </Link>
      </div>

      {/* Botón Hamburguesa */}
      <button className="menu-btn" onClick={() => setMenuAbierto(!menuAbierto)}>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
      </button>

      {/* Navegación */}
      <nav className={`nav-menu ${menuAbierto ? "active" : ""}`}>
        <ul>
          {location.pathname !== "/" && (
            <li>
              <Link
                to="/"
                onClick={() => setMenuAbierto(false)}
                style={{ fontWeight: "bold", color: "#ffffff" }}
              >
                Inicio
              </Link>
            </li>
          )}
          <li>
            <Link to="/bebidas" onClick={() => setMenuAbierto(false)}>
              Bebidas
            </Link>
          </li>
          <li>
            <Link to="/galeria" onClick={() => setMenuAbierto(false)}>
              Galería
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setMenuAbierto(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
