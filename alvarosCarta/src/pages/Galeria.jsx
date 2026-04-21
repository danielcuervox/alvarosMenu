import React from "react";
import { useState } from "react";

export const Galeria = () => {
  const images = [
    { id: 1, url: "alitas.png", alt: "Corte de carne" },
    { id: 2, url: "arrozLeche.jpg", alt: "Ensalada fresca" },
    // ... más fotos
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="main-container">
      <h2 className="tituloComidas">GALERIA</h2>

      {/* Grilla de fotos */}
      <div className="grid">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={img.alt}
            onClick={() => setSelectedImg(img.url)}
          />
        ))}
      </div>

      {/* Modal / Lightbox que aparece al hacer clic */}
      {selectedImg && (
        <div className="overlay" onClick={() => setSelectedImg(null)}>
          <span className="close">&times;</span>
          <img src={selectedImg} alt="Plato seleccionado" />
        </div>
      )}
    </div>
  );
};
