import { useState } from "react";

//import costillas from "./assets/costillas.png";

import { Routes, Route } from "react-router-dom";
import Footer from "./footer";
import "./footer.css";
import Header from "./Header";

import "./header.css";
import "./App.css";
import { Carta } from "./Carta";
import { Bebidas } from "./pages/Bebidas";
import { Contacto } from "./pages/Contacto";
import { Promos } from "./pages/Promos";
import { NuestraHistoria } from "./pages/NuestraHistoria";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Carta />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nuestraHistoria" element={<NuestraHistoria />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
