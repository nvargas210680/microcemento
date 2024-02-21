import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="gray-circle" />
            <motion.h1 initial={{ y: "2rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: "spring" }}>
              Descubre <br /> el Arte
              <br /> del Revestimiento
              <br /> con Microcemento
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Encuentra una variedad de estilos exclusivos, como tu! </span>
            <span className="secondaryText">Tu elijes el diseno y nosotros nos ecargamos del resto!</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={35} />
            <input type="text" />
            <button className="button">Busqueda</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={150} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Proyectos</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={150} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Clientes Satisfechos</span>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="flexCenter hero-right">
          <motion.div initial={{ x: "7rem", opacity: 0 }} animate={{ x: "0", opacity: 1 }} transition={{ duration: 2, type: "spring" }} className="image-container">
            <img src="./banoromano.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
