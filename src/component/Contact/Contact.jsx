import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { useRef } from "react";

const Contact = () => {
  const contactanosRef = useRef(null);

  const text = {
    Chat: "Contacto",
  };

  return (
    <section id="contactanos" className="c-wrapper" ref={contactanosRef}>
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Presupuestos e Informacion</span>
          <span className="primaryText">Contactanos</span>
          <span className="secondayText">
            ¡Transforma tus espacios con nuestro exclusivo revestimiento de microcemento! ¡Contáctanos hoy mismo para descubrir cómo podemos llevar tus proyectos de renovación a otro nivel! ¡Estamos
            aquí para convertir tus ideas en realidad!
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Llama</span>
                    <span className="secondaryText">(+34) 673 16 29 68</span>
                  </div>
                </div>
                <div className="flexCenter button">Llama ahora</div>
              </div>

              {/* scond mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Contacto</span>
                    <span className="secondaryText">(+34) 673 16 29 68</span>
                  </div>
                </div>
                <div className="flexCenter button">{text.Chat}</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right flexCenter">
          <div className="image-log">
            <img src="./finallogo1.png" alt="" />
            <p className="email">
              <a href="mailto:someone@example.com">artmicrocemento@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
