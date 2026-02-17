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
        targetDate="2026-03-29T09:00:00" 
        titulo="LSL-MTB 2026 PRIMERA SERIE" 
        descripcion="Chiguata Epic - 29 de marzo 2026"
       />
      <Events />
      <Sponsors />

    </div>
  );

}
