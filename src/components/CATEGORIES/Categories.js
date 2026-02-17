import React from "react";
import "./Categories.css";

export default function Categories({ titulo, descripcion, imagen, categorias, items }) {
  return (
    <section className="categories-section">
      <div className="categories-container">
        
        {/* Lado izquierdo: imagen */}
        <div className="categories-left">
          <img src={imagen} alt="Evento" />
        </div>

        {/* Lado derecho */}
        <div className="categories-right">
          <h2 className="section-title">{titulo}</h2>
          <p className="section-description">{descripcion}</p>

          {/* Rectángulo de categorías con línea vertical */}
          <div className="categories-card">
            <div className="categories-card-content">
              <div className="categories-line"></div>
              <div className="categories-info">
                <h3 className="categories-card-title">Categorías:</h3>
                <ul className="categories-list">
                  {categorias.map((cat, index) => (
                    <li key={index}>{cat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cuadros con ícono, título y párrafo */}
          <div className="categories-items">
            {items.map((item, index) => (
              <div key={index} className="item-card">
                <div className="item-icon">{item.icon}</div>
                <h2 className="item-title">{item.title}</h2>
                <p className="item-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
