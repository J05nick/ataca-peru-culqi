import React, { useState, useEffect } from "react";
import "./Home.css";
import Carrousel from "../components/CARROUSEL/Carrousel";
import Events from "../components/EVENTCARD/Events";
import Countdown from "../components/COUNTDOWN/Countdown";
import Sponsors from "../components/SPONSORS/Sponsors";

export default function Home() {
  return (
    <div>
      <Carrousel />
      <Countdown 
        targetDate="2026-06-28T09:00:00" 
        titulo="TRAIL DEL PESCADOR 10K" 
        descripcion="¡Más fuerte que el cansancio! Carrera de Trail en la playa de Los Órganos - Piura"
       />
      <Events />
      <Sponsors />

    </div>
  );

}
