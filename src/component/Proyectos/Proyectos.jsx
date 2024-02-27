import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Proyectos.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { useRef } from "react";

const Proyectos = () => {
  const proyectoRef = useRef(null);

  return (
    <section id="proyectos" ref={proyectoRef} className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Galeria</span>
          <span className="primaryText">Proyectos</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="proyects" />
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText r-price">{card.place}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Proyectos;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
