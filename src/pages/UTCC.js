import React from 'react';
import EventBanner from '../components/EVENTBANNER/EventBanner';
import Countdown from "../components/COUNTDOWN/Countdown";
import HeroVideo from "../components/HEROVIDEO/HeroVideo";
import Categories from '../components/CATEGORIES/Categories';
import { FaMedal} from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { IoTicket } from "react-icons/io5";

import ButtonBases from '../components/ButtonBases/ButtonBases';
import Carrusel2 from '../components/CARROUSEL2/Carrousel2';
import Mapping from '../components/MAPPING/Mapping';
import Responsib from '../components/RESPONSIBILITIES/Responsib';

export default function UTCC() {
    const items_inscripcion = [
      {
        img: "/images/UTCC/UTCC1.jpg",
        title: "Inscripción Paquete Completo",
        desc: "Inscríbite y disfruta la experiencia completa de la UTCC con todos los beneficios incluidos",
        link: "https://atacaperu.com/inscripcion_aqptrail_2026_paquete_completo/",
        btnText: "Inscribirme",
      },
      {
        img: "/images/UTCC/UTCC2.jpg",  
        title: "Inscripción Solo Competencia",
        desc: "Inscríbite y disfruta la experiencia de competir en la UTCC con todos los beneficios incluidos",
        link: "https://atacaperu.com/inscripcion_aqptrail_2026_primera_serie/",
        btnText: "Inscribirme",
      }


    ]

    const items_responsib = [
    {
      img: "/images/UTCC/UTCC10.jpg",
      title: "Deslinde de Responsabilidad",
      desc: "Aceptación de riesgos y condiciones del evento.",
      link: "https://atacaperu.com/wp-content/uploads/2025/02/DESLINDE-DE-RESPONSABILIDAD.pdf",
      btnText: "Ver documento",
    },

    {
      img: "/images/UTCC/UTCC11.jpg",
      title: "Dispositivo Sensor",
      desc: "Uso correcto y responsabilidad del equipo.",
      link: "https://atacaperu.com/wp-content/uploads/2025/02/RESPONSABILIDAD-SENSOR.pdf",
      btnText: "Ver documento",
    },

    {
      img: "/images/UTCC/UTCC12.jpg",
      title: "Autorización de Menor",
      desc: "Permiso para participación de menores.",
      link: "https://atacaperu.com/wp-content/uploads/2025/12/AUTORIZACION-MENOR-DE-EDAD-TRIATLON.pdf",
      btnText: "Ver documento",
    },
  ];


    const images_carrousel2=[
      "/images/UTCC/UTCC4.jpg",
      "/images/UTCC/UTCC5.jpg",
      "/images/UTCC/UTCC6.jpg",
      "/images/UTCC/UTCC7.jpg",
      "/images/UTCC/UTCC8.jpg",
      "/images/UTCC/UTCC9.jpg"
    ]

    const detalles_hero = [
      { icon: <FaMapMarkerAlt />, label: "Lugar", value: "Colca, Arequipa" },
      { icon: <FaClock />, label: "Hora", value: "08:00 AM" },
      { icon: <FaMedal />, label: "Premios", value: "Reconocimientos a ganadores" },
    ];



    const categorias = [
      "Damas 30K: Elite, Máster y Súper Máster",
      "Varones 30K: Elite, Máster, Súper Máster y Ultra Máster",
      "Damas 8K: Elite, Máster y Súper Máster",
      "Varones 8K: Elite, Máster, Súper Máster y Ultra Máster"
    ];

  const detalles = [
    { label: "Fecha", value: "29 de marzo 2026" },
    { label: "Lugar", value: "Tiabaya, Arequipa, Perú" },
    { label: "Concentración", value: "07:30 AM" },
    { label: "Partida", value: "08:00 AM" }
  ];

  
  const items = [
    { icon: <FaVanShuttle />, title: "Transporte", text: "Ida y vuelta (Paquete Completo)" },
    { icon: <MdFoodBank />, title: "Alimentación", text: "Desayuno, almuerzo y cena (Paquete Completo)" },
    { icon: <MdHotel />, title: "Alojamiento", text: "Hospedaje en hotel (Paquete Completo)" },
    { icon: <IoTicket />, title: "Ticket turístico", text: "Para ingreso al Cañón del Colca (Paquete Completo)" },
  ];


  return (

     <>
      <HeroVideo
        descripcion="El Colca no se conquista, se respeta… y tú dejas tu huella en su historia"
        video="https://atacaperu.com/wp-content/uploads/2026/02/UTCC.mp4"
        imagen="/images/UTCC.png"   // 🔑 nueva prop para mostrar al costado del título
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
        targetDate="2026-11-07T09:00:00"
        titulo="CUENTA REGRESIVA PARA UTCC 2026"
        descripcion="Ultra Trail Colca: donde la montaña prueba tu cuerpo y el abismo tu espíritu"
      />

      <Responsib titulo="INSCRIPCIONES" items={items_inscripcion} />

      <Categories
        titulo="Corre donde la montaña toca el cielo y el abismo la tierra"
        descripcion="En el Colca cada paso es un reto y cada kilómetro una victoria. La montaña te exige, el cañón te inspira y tu espíritu demuestra que no hay límite más profundo que tu determinación"
        imagen="/images/UTCC/UTCC3.jpg"
        categorias={categorias}
        items={items}
      />
      <ButtonBases url={"https://atacaperu.com/bases-colca-canyon/"}/>
      <br />
      <br />
      <br />
      <Carrusel2 images={images_carrousel2} titulo="¿Qué incluye el Paquete Completo?" />
      <Mapping titulo="Ruta 8K" stravaEmbedUrl="https://www.strava.com/activities/17373365056"/>
      <Mapping titulo="Ruta 30K" stravaEmbedUrl="https://www.strava.com/activities/17373365056"/>
      <Responsib titulo="Responsabilidad y Autorizaciones" items={items_responsib} />
    </>

  );
}
