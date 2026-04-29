import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

const photos = [
  {
    src: "imgGallery/img1.jpg",
    width: 800,
    height: 600,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img2.jpg",
    width: 1600,
    height: 900,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img3.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img4.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img5.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img6.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img7.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img8.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img9.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img10.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img11.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
  {
    src: "imgGallery/img12.jpg",
    width: 900,
    height: 1200,
    alt: "foto de Alavaro's Gastrobar",
  },
];

export const Galeria = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="tituloComidas">GALERÍA DE FOTOS</h2>

      {/* 1. La cuadrícula de fotos */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        <PhotoAlbum
          layout="columns" // Cambiamos de 'rows' a 'columns'
          columns={3} // Esto obliga a que haya 3 miniaturas por fila
          spacing={10} // Espacio entre miniaturas
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={({ imgProps, wrapperProps }) => (
            <div
              {...wrapperProps}
              style={{
                ...wrapperProps.style,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                aspectRatio: "1 / 1", // Opcional: Esto hace que todas las miniaturas sean cuadradas (muy limpio)
              }}
            >
              <img
                {...imgProps}
                style={{
                  ...imgProps.style,
                  cursor: "pointer",
                  objectFit: "cover", // Si usas aspectRatio, esto evita que la imagen se deforme
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          )}
        />
      </div>

      {/* 2. El visualizador (se abre solo cuando index >= 0) */}
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
};
