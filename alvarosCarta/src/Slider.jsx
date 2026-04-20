import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "./slider/IMG_4867.jpg",
    "./slider/IMG_3016.JPG",
    "./slider/IMG_2916.JPG",
    "./slider/IMG_4931.jpg",
  ];

  useEffect(() => {
    // Cambia la foto cada 3 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* circulos blancos abajo */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "dot-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
