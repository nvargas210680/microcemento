import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const proyectosRef = useRef(null);
  const quienesSomosRef = useRef(null);
  const contactanosRef = useRef(null);
  const comienzoRef = useRef(null);

  const text = {
    Siguenos: "Siguenos",
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "100%" };
    }
  };

  const scrollToProyectos = () => {
    if (proyectosRef.current) {
      proyectosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToQuienesSomos = () => {
    if (quienesSomosRef.current) {
      quienesSomosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContactanos = () => {
    if (contactanosRef.current) {
      contactanosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGetStarted = () => {
    if (getStartedRef.current) {
      comienzoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSiguenos = () => {
    if (siguenosRef.current) {
      siguenosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerwidth h-container">
        <img src="./finallogo1.png" alt="logo" width={120} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#proyectos" onClick={scrollToProyectos}>
              Proyectos
            </a>
            <a href="#quienes-somos" onClick={scrollToQuienesSomos}>
              Quines Somos
            </a>
            <a href="#contactanos" onClick={scrollToContactanos}>
              Contactanos
            </a>
            <a href="#get-started" onClick={scrollToGetStarted}>
              Get Started
            </a>
            <button className="button" onClick={scrollToSiguenos}>
              <a href="#siguenos">{text.Siguenos}</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon " onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
