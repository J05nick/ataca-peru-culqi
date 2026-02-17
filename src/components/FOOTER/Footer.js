import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      
      {/* Parte superior */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src="https://atacaperu.com/wp-content/uploads/2023/04/logo-blanco.png" alt="Mi Logo" className="logo-img" />
          <p>Impulsando el deporte competitivo - 2026</p>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">▶️</a>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="footer-divider"></div>

      {/* Parte inferior */}
      <div className="footer-bottom">
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>📧 atacaperu@gmail.com</p>
          <p>📞 111111</p>
        </div>

        <div className="footer-column">
          <h4>Ubicación</h4>
          <p>📍 Arequipa, Arequipa</p>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <p>© {new Date().getFullYear()} ATACA PERÚ</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>


  )
}
export default Footer;
