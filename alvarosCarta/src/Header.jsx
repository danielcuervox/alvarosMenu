import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header">
      <div className="logo">Alvaro's</div>

      {/* Botón Hamburguesa */}
      <button className="menu-btn" onClick={() => setMenuAbierto(!menuAbierto)}>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
        <span className={`bar ${menuAbierto ? "open" : ""}`}></span>
      </button>

      {/* Navegación */}
      <nav className={`nav-menu ${menuAbierto ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#entrantes" onClick={() => setMenuAbierto(false)}>
              Entrantes
            </a>
          </li>
          <li>
            <a href="#ensaladas" onClick={() => setMenuAbierto(false)}>
              Ensaladas
            </a>
          </li>
          <li>
            <a href="#hamburguesas" onClick={() => setMenuAbierto(false)}>
              Hamburguesas
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={() => setMenuAbierto(false)}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
