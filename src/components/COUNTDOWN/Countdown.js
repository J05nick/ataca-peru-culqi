import React, { useState, useEffect } from "react"; 
import './Countdown.css';

const Countdown = ({ targetDate, titulo, descripcion }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

 return (
  <section className="countdown-section">
    <h1 className="countdown-title">{titulo}</h1>
    <p className="countdown-description">{descripcion}</p>
    <div className="countdown">
      {Object.keys(timeLeft).length === 0 ? (
        <h3>¡El evento ya comenzó!</h3>
      ) : (
        <div className="countdown-grid">
          {Object.entries(timeLeft).map(([unidad, valor]) => (
            <div key={unidad} className="countdown-box">
              <span className="countdown-value">{valor}</span>
              <span className="countdown-label">{unidad}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

};

export default Countdown;
