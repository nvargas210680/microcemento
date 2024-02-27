import React from "react";
import "./GetStarted.css";
import { useRef } from "react";

const GetStarted = () => {
  const getStartedRef = useRef(null);

  return (
    <section id="get-started" className="g-wrapper" ref={getStartedRef}>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Art Microcemento</span>
          <span className="secondaryText">
            ¡Contáctanos hoy mismo para solicitar tu cotización completamente gratis.
            <br />
            Estamos aqui para responder a todas tus preguntas,
            <br /> así como para brindarte el apoyo profesional que necesitas con tus diseños!
          </span>
          <button className="button">
            <a href="mailto:artmicrocemento@gmail.com">Email</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
