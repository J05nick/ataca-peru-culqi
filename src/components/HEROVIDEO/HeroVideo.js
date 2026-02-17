import React from "react";
import "./HeroVideo.css";

const HeroVideo = ({ titulo, descripcion, video, imagen, detalles }) => {
  return (
    <section className="event-hero">
      {/* Video de fondo */}
      <video
        className="event-hero-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay oscuro */}
      <div className="event-hero-overlay"></div>

      {/* Contenido */}
      <div className="event-hero-content">
        <div className="event-hero-header">
          <h1 className="event-hero-title">{titulo}</h1>
          {imagen && <img src={imagen} alt="Logo" className="event-hero-image" />}
        </div>

        <p className="event-hero-description">{descripcion}</p>

        <div className="event-hero-details">
          {detalles.map((item, index) => (
            <div key={index} className="event-detail-card">
              <div className="event-detail-icon">{item.icon}</div>
              <h4 className="event-detail-label">{item.label}</h4>
              <p className="event-detail-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
