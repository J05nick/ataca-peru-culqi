import React from 'react'
import './Events.css';

const eventos = [
  {
    id: 1,
    titulo: "LSL-MTB 2026 PRIMERA SERIE: CHIGUATA EPIC",
    fecha: "29 de marzo 2026",
    lugar: "Chiguata, Arequipa, Perú",
    descripcion: "Competencia pedestre organizada por AFABPERU.",
    enlace: "/chiguata",
    imagen: "https://atacaperu.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-23-at-2.50.59-PM.avif" // ejemplo: corredores
  },
  {
    id: 2,
    titulo: "TRIATLÓN CROSS LOS ORGANOS 2026",
    fecha: "04 de abril 2026",
    lugar: "Los Órganos, Piura, Perú",
    descripcion: "Evento oficial de atletismo con categorías juveniles y mayores.",
    enlace: "/triatlon",
    imagen: "https://atacaperu.com/wp-content/uploads/2025/12/cuadraditro.jpeg" // ejemplo: pista atlética
  },
  {
    id: 3,
    titulo: "AQP TRAIL RUNNING 2026: LA RUTA DEL SILLAR ",
    fecha: "03 de mayo 2026",
    lugar: "Tiabaya, Arequipa, Perú",
    descripcion: "Encuentro deportivo para colegios de distintas regiones.",
    enlace: "/aqp_trail_sillar",
    imagen: "https://atacaperu.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-28-at-8.34.08-PM-1.jpeg" // ejemplo: grupo corriendo
  },

  {
    id: 4,
    titulo: "ULTRA COLCA CANYON 2026",
    fecha: "07 y 08 de noviembre 2026",
    lugar: "Colca, Arequipa, Perú",
    descripcion: "Encuentro deportivo para colegios de distintas regiones.",
    enlace: "/utcc",
    imagen: "https://atacaperu.com/wp-content/uploads/2026/01/cuadrado.avif"
  }
];

const Events = () => {
  return (
    <section className="events-section">
      <h2>Próximos Eventos</h2>
      <div className="eventos-grid">
        {eventos.map((evento) => (
          <div key={evento.id} className="evento-card">
            <img src={evento.imagen} alt={evento.titulo} className="evento-img" />
            <h3>{evento.titulo}</h3>
            <p><strong>Fecha:</strong> {evento.fecha}</p>
            <p><strong>Lugar:</strong> {evento.lugar}</p>
            <p>{evento.descripcion}</p>
            <a href={evento.enlace} target="_blank" rel="noopener noreferrer">
              Ver detalles e inscribirse
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
