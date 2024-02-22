import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "100%" };
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
            <a href="">Proyectos</a>
            <a href="">Quines Somos</a>
            <a href="">Contactanos</a>
            <a href="">Comienzo</a>
            <button className="button">
              <a href="">Contacto</a>
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
