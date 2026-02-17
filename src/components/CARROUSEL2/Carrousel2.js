import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./Carrousel2.css";

const Carrousel2 = ({ images = [], titulo }) => {
  return (
    <div className="carrusel2-container">

      {/* TÍTULO ARRIBA */}
      {titulo && <h2 className="carrusel2-title">{titulo}</h2>}

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="carrusel2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card">
              <img src={img} alt={`slide-${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Carrousel2;