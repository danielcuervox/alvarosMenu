import React from "react";

export const NuestraHistoria = () => {
  return (
    <div
      className="main-container"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h2 className="tituloComidas">NUESTRA HISTORIA</h2>
      <div
        className="menu-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white" }}>Página web en construcción</p>
        <img
          src="buildingWebApp2.jpg"
          alt="se construye una web/app"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px", // Opcional: para darle un toque más pulido
            display: "block",
          }}
        />
      </div>
    </div>
  );
};
