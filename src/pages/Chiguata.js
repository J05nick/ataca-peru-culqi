import React from 'react';
import EventBanner from '../components/EVENTBANNER/EventBanner';
import Countdown from "../components/COUNTDOWN/Countdown";
import HeroVideo from "../components/HEROVIDEO/HeroVideo";
import Categories from '../components/CATEGORIES/Categories';
import { FaMedal} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ButtonBases from '../components/ButtonBases/ButtonBases';
import Carrusel2 from '../components/CARROUSEL2/Carrousel2';
import Mapping from '../components/MAPPING/Mapping';
import Responsib from '../components/RESPONSIBILITIES/Responsib';

export default function Chiguata() {
    const items_inscripcion = [
      {
        img: "/images/LSL_MTB/2fechas.jpg",
        title: "Inscripción paquete completo",
        desc: "¡Asegura tu lugar en el Chiguata Epic 2026! Inscríbete ahora y reserva todas las fechas",
        link: "https://atacaperu.com/inscripcion-paquete-completo-lsl-mtb-2026/",
        btnText: "Inscribirme",
      },
      {
        img: "/images/LSL_MTB/1fecha.jpg",  
        title: "Inscripción por fecha",
        desc: "Inscríbite en la primera FECHA: CHIGUATA EPIC 2026",
        link: "https://atacaperu.com/inscripcion-chiguata-epic-2026/",
        btnText: "Inscribirme",
      }

    ]

    const items_responsib = [
    {
      img: "/images/RESPONSABILITIES/deslinde.jpg",
      title: "Deslinde de Responsabilidad",
      desc: "Aceptación de riesgos y condiciones del evento.",
      link: "https://atacaperu.com/wp-content/uploads/2025/02/DESLINDE-DE-RESPONSABILIDAD.pdf",
      btnText: "Ver documento",
    },

    {
      img: "/images/RESPONSABILITIES/sensor.jpg",
      title: "Dispositivo Sensor",
      desc: "Uso correcto y responsabilidad del equipo.",
      link: "https://atacaperu.com/wp-content/uploads/2025/02/RESPONSABILIDAD-SENSOR.pdf",
      btnText: "Ver documento",
    },

    {
      img: "/images/RESPONSABILITIES/menor.jpg",
      title: "Autorización de Menor",
      desc: "Permiso para participación de menores.",
      link: "https://atacaperu.com/wp-content/uploads/2025/12/Autorizacion-para-menor-delinde-responsabilidad-CHIGUATA-EPIC-2026.pdf",
      btnText: "Ver documento",
    },
  ];


    const images_carrousel2=[
      "/images/Chiguata_medalla.jpg",
      "/images/Chiguata_certificado.jpg",
      "/images/Chiguata_posavasos.jpg",
      "/images/Fruta_hidratacion.jpg",
    ]

    const detalles_hero = [
      { icon: <FaMapMarkerAlt />, label: "Lugar", value: "Chiguata, Arequipa" },
      { icon: <FaClock />, label: "Hora", value: "08:00 AM" },
      { icon: <FaMedal />, label: "Premios", value: "Reconocimientos a ganadores" },
    ];



    const categorias = [
      "Varones Pro: Juveniles, Elite, Master A,B y C",
      "Damas Pro: Elite, Master",
      "Varones Turismo: Open, Master y Súper Máster",
      "Damas Turismo: Open y Master"
    ];

  const detalles = [
    { label: "Fecha", value: "29 de marzo 2026" },
    { label: "Lugar", value: "Chiguata, Arequipa, Perú" },
    { label: "Concentración", value: "07:30 AM" },
    { label: "Partida", value: "08:00 AM" }
  ];

  
  const items = [
    { icon: <RiTeamFill />, title: "Acumulativo", text: "Puntaje grupal acumulativo" },
    { icon: <FaMedal />, title: "Premios", text: "Reconocimientos a los ganadores de cada categoría" },
    { icon: <MdTimer />, title: "Cronometrado", text: "Tiempo cronometrado elctrónicamente" },
    { icon: <GiTrophyCup />, title: "Grupos", text: "Premio en efectivo a los primeros tres equipos" },
  ];


  return (

     <>
      <HeroVideo
        descripcion="El evento de ciclismo de montaña más esperado del año en Arequipa. ¡Prepárate para vivir la emoción del Chiguata Epic 2026!"
        video="https://atacaperu.com/wp-content/uploads/2026/02/videoplayback.mp4"
        imagen="/images/LSL MTB CHIGUATA.png"   // 🔑 nueva prop para mostrar al costado del título
        detalles={detalles_hero}
      />

      

      {/*}
      <EventBanner
        titulo="LSL-MTB 2026 PRIMERA SERIE: CHIGUATA EPIC"
        descripcion="Competencia pedestre organizada por AFABPERU."
        imagen="https://atacaperu.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-23-at-2.50.59-PM.avif"
        detalles={detalles}
      />
      */ }

      <br />

      <Countdown
        targetDate="2026-03-29T09:00:00"
        titulo="CUENTA REGRESIVA PARA CHIGUATA EPIC 2026"
        descripcion="¡Prepárate para la competencia más emocionante de la temporada!"
      />

      <Responsib titulo="INSCRIPCIONES" items={items_inscripcion} />

      <Categories
        titulo="El camino es TUYO"
        descripcion="Una ruta exigente, paisajes únicos y la mejor experiencia del ciclismo en Arequipa 🌄🔥
                    Vive el ciclismo donde el camino es tuyo."
        imagen="https://atacaperu.com/wp-content/uploads/2023/04/portada-3.jpg"
        categorias={categorias}
        items={items}
      />
      <ButtonBases url={"https://atacaperu.com/wp-content/uploads/2026/01/BASES-LSL-MTB-2026.pdf"}/>
      <br />
      <br />
      <br />
      <Carrusel2 images={images_carrousel2} titulo="¿Qué incluye tu participación?" />
      <Mapping titulo="Ruta TURISMO" stravaEmbedUrl="https://www.strava.com/activities/17373365056"/>
      <Mapping titulo="Ruta PRO" stravaEmbedUrl="https://www.strava.com/activities/17373365056"/>
      <Responsib titulo="Responsabilidad y Autorizaciones" items={items_responsib} />
    </>

  );
}
