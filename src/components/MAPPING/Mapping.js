import React from "react";
import "./Mapping.css";

const Mapping = ({ titulo, stravaEmbedUrl }) => {
  return (
    
    <section className="route-container">
      <h2 className="route-title">
        {titulo}
      </h2>

      <div className="route-map">
  <iframe
    src={stravaEmbedUrl}
    width="100%"
    height="100%"
    frameBorder="0"
    allowFullScreen
    loading="lazy"
    title="Ruta Strava"
  ></iframe>
</div>
    </section>
  );
};

export default Mapping;