import React from "react";
import "./EventBanner.css";

const EventBanner = ({ titulo, descripcion, imagen, detalles }) => {
  return (
    <section 
      className="event-hero"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      {/* Overlay oscuro */}
      <div className="event-hero-overlay"></div>

      {/* Contenido */}
      <div className="event-hero-content">
        <h1 className="event-hero-title">{titulo}</h1>
        <p className="event-hero-description">{descripcion}</p>

        <div className="event-hero-details">
          {detalles.map((item, index) => (
            <div key={index} className="event-detail-card">
              <h4>{item.label}</h4>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventBanner;

