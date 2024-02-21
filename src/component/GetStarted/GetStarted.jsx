import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Art Microcemento</span>
          <span className="secondaryText">
            ¡Contáctanos hoy mismo para solicitar tu cotización completamente gratiz y tener el placer de responder tus preguntas,
            <br /> así como brindarte el apoyo profesional que necesitas con tus diseños!
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
