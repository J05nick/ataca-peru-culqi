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

export default function Triatlon() {
    const items_inscripcion = [
      {
        img: "/images/TRIATLON/individual.jpg",
        title: "Inscripción Sprint Individual",
        desc: "Inscríbite en la modalidad individual de la triatlón",
        link: "https://atacaperu.com/inscripcion-triatlon-sprint-2025/",
        btnText: "Inscribirme",
      },
      {
        img: "/images/TRIATLON/postas.jpg",  
        title: "Inscripción Sprint en Postas",
        desc: "Inscríbite en la modalidad de postas de la triatlón",
        link: "https://atacaperu.com/inscripcion-triatlon-postas-2025/",
        btnText: "Inscribirme",
      },
      {
        img: "/images/TRIATLON/kid.jpg",  
        title: "Inscripción Sprint Kids",
        desc: "Inscríbite en la modalidad KIDS de la triatlón",
        link: "https://atacaperu.com/ficha-de-inscripcion-kids/",
        btnText: "Inscribirme",
      }


    ]

    const items_responsib = [
    {
      img: "/images/TRIATLON/biker.jpg",
      title: "Deslinde de Responsabilidad",
      desc: "Aceptación de riesgos y condiciones del evento.",
      link: "https://atacaperu.com/wp-content/uploads/2025/02/DESLINDE-DE-RESPONSABILIDAD.pdf",
      btnText: "Ver documento",
    },

    {
      img: "/images/TRIATLON/runn.jpg",
      title: "Dispositivo Sensor",
      desc: "Uso correcto y responsabilidad del equipo.",
      link: "https://atacaperu.com/wp-content/uploads/2025/02/RESPONSABILIDAD-SENSOR.pdf",
      btnText: "Ver documento",
    },

    {
      img: "/images/TRIATLON/swimer.jpg",
      title: "Autorización de Menor",
      desc: "Permiso para participación de menores.",
      link: "https://atacaperu.com/wp-content/uploads/2025/12/AUTORIZACION-MENOR-DE-EDAD-TRIATLON.pdf",
      btnText: "Ver documento",
    },
  ];


    const images_carrousel2=[
      "/images/TRIATLON/1.jpg",
      "/images/TRIATLON/2.jpg",
      "/images/TRIATLON/3.jpg",
      "/images/TRIATLON/4.jpg"
    ]

    const detalles_hero = [
      { icon: <FaMapMarkerAlt />, label: "Lugar", value: "Playa los Órganos, Piura" },
      { icon: <FaClock />, label: "Hora", value: "08:00 AM" },
      { icon: <FaMedal />, label: "Premios", value: "Reconocimientos a ganadores" },
    ];



    const categorias = [
      "Damas y Varones Élite: 18 a 29 años",
      "Damas y Varones Máster: 30 a 39 años",
      "Damas y Varones Súper Máster: 40 a 49 años",
      "Damas y Varones Ultra Máster: 50 años a más",
      "Postas: Varones, Damas o Mixtas (3 integrantes)",
      "Diferentes categorías Kids" 
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
        descripcion="En Los Órganos, la fuerza del mar, el sol de Piura y tu espíritu indomable se unen: ¡Triatlón 2026, donde los límites se rompen y los sueños se conquistan!"
        video="https://atacaperu.com/wp-content/uploads/2026/02/TRI.mp4"
        imagen="/images/ATACA TRI.png"   // 🔑 nueva prop para mostrar al costado del título
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
        targetDate="2026-04-04T09:00:00"
        titulo="CUENTA REGRESIVA PARA ATACA TRI 2026"
        descripcion="¡Tres disciplinas, un solo espíritu!"
      />

      <Responsib titulo="INSCRIPCIONES" items={items_inscripcion} />

      <Categories
        titulo="Rompe tus límites, conquista LOS ÓRGANOS"
        descripcion="Cada brazada, cada pedal, cada paso… en Los Órganos 2026 tu esfuerzo se convierte en victoria."
        imagen="/images/TRIATLON/categories.jpg"
        categorias={categorias}
        items={items}
      />
      <ButtonBases url={"https://atacaperu.com/wp-content/uploads/2025/12/BASES-TRIATLON-LOS-ORGANOS-ATACA-PERU-2026.pdf"}/>
      <br />
      <br />
      <br />
      <Carrusel2 images={images_carrousel2} titulo="¿Qué incluye tu participación?" />
      <Mapping titulo="Ruta SPRINT NADO" stravaEmbedUrl="https://www.strava.com/activities/17373365056"/>
      <Mapping titulo="Ruta SPRINT CICLISMO" stravaEmbedUrl="https://www.strava.com/activities/17373365056"/>
      <Mapping titulo="Ruta SPRINT RUNNING" stravaEmbedUrl="https://www.strava.com/activities/17373365056"/>
      <Responsib titulo="Responsabilidad y Autorizaciones" items={items_responsib} />
    </>

  );
}
