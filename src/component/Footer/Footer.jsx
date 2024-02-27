import React from "react";
import "./Footer.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const siguenosRef = useRef(null);
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/artmicrocemento", "_blank");
  };

  return (
    <section id="siguenos" className="f-wrapper" ref={siguenosRef}>
      <div className="paddings flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logowhite.png" alt="" width={250} />
          <span className="secondaryText ">
            Nos especializamos en el arte del revestimiento con microcemento,
            <br /> destacándonos por la experiencia y pasión de nuestro equipo
            <br /> en la creación de espacios únicos y elegantes.
            <br /> Además, contamos con una póliza de seguros contra daños,
            <br /> para brindarte aún más tranquilidad.
            <br /> Con nosotros, puedes confiar en la excelencia y calidad en cada proyecto,
            <br /> desde un diseño minimalista hasta una renovación completa.
          </span>
          <span className="flexColStart">
            <img src="./allianz.png" alt="" width={100} />
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Informacion</span>
          <span className="secondaryText">
            Alcala de Henares,
            <br />
            Comunidad Madrid,
            <br />
            Epartales Norte 28806,
            <br />
            Movil (+34) 673 16 29 68
          </span>

          <div className="flexCenter f-menu">
            <span>Proyectos</span>
            <span>Quines Somos</span>
            <span>Contactanos</span>
            <span>Comienzo</span>
          </div>
          <div className="socialmedia">
            <FontAwesomeIcon icon={faInstagram} onClick={handleInstagramClick} style={{ cursor: "pointer", fontSize: "2rem", color: "#C13584" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
