import React from "react";

export const Contacto = () => {
  return (

    <>
      <div className="main-container">
        <h2 className="tituloComidas">CONTACTO</h2>
        <div style={{ padding: "20px", color: "white" }}>
          <p>📞 Teléfono: 916 62 57 18</p>
          <p>📍 Dirección: Calle Dolores Ibárruri 7</p>
          <p>28100 - ALCOBENDAS</p>
        </div>
      </div>

      <div
        className="map-container"
        style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 className="tituloComidas">NUESTRA UBICACIÓN</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.621020998226!2d-3.654113188391519!3d40.54996124740056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422c909c847b97%3A0x9bd774dc66ea43a5!2sAlvaro&#39;s%20Gastrobar!5e0!3m2!1ses!2ses!4v1773863967922!5m2!1ses!2ses"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación"
        ></iframe>
      </div>
    </>
  );
};
