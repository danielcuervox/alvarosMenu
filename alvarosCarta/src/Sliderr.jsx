import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Sliderr.css";

export const Sliderr = () => {
  const images = [
    "./slider/1.jpg",
    "./slider/2.jpg",
    "./slider/3.jpg",
    "./slider/4.jpg",
    "./slider/5.jpg",
    "./slider/6.jpg",
    "./slider/7.jpg",
    "./slider/8.jpg",
    "./slider/9.jpg",
    "./slider/10.jpg",
    "./slider/11.jpg",
    "./slider/12.jpg",
  ];

  return (
    <div className="slider-wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="card-food">
              <img src={img} alt={`Plato ${index}`} />
              {/* <div className="card-info">
                <h3>Especialidad Alvaro's</h3>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
