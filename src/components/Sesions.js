import React from "react";
import ImageSlider from "./ImageSlider";
import "../App.css";
import { Link } from "react-scroll";
// const { familiares } = require("../pictures");


const familiaresImages = require.context('../assets/sesionesmin', true)

export default function Sesions() {
  return (
    <div className="sesions-container" id="sesiones">
      <aside className="sesions-aside">
        <h4 className="titulo-sesions" >
          Sesiones <br/>
          <span className="titulo-sesions-2" >Familiares</span>
        </h4>
        <div className="content">
        <div className="linea"></div>
        <p className="text">
         En sesiones de 2hs, buscamos retratarte a vos y tu
          pareja o familia en situación cotidianas y pasar un buen momento
          compartido.<br/>
          Solicitá acá tu presupuesto para regalar o regalarte una sesión de
          fotos familiares.
        </p>

        <br/>
        <Link
            className="bottom-color"
            to="contact"
            spy={true}
            smooth={false}
            offset={-60}
            duration={800}
          >
            Contactame
          </Link>
     
        <div className="linea-bottom"></div>
        </div>
      </aside>
      <section className="sesions-section">
        {" "}
        <div className="carousel-container" id="corrientes">
          <ImageSlider slides={familiaresImages} section="sesiones" />
        </div>
      </section>
    </div>
  );
}


