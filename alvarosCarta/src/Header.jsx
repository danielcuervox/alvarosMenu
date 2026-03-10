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
              Bebidas
            </a>
          </li>
          <li>
            <a href="#entrantes" onClick={() => setMenuAbierto(false)}>
              Promociones
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={() => setMenuAbierto(false)}>
              Contacto
            </a>
          </li>
          <li>
            <a href="#hamburguesas" onClick={() => setMenuAbierto(false)}>
              Nuestra Historia
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
